import { View, Text, FlatList, Alert, TouchableOpacity } from 'react-native';
import {style} from "./styles";
import React, {useState, useEffect} from 'react';
import{ collection, doc, getDocs, query, where, updateDoc, deleteDoc} from 'firebase/firestore';
import { db, auth} from '../../services/firebaseConfig'
import * as Notifications from 'expo-notifications';
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowBanner: true,
        shouldShowList: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});
export default function Home(){

const [medicamentos, setMedicamentos] = useState<any[]>([]);
const [ultimoAlerta, setUltimoAlerta] = useState('');
async function buscarMedicamentos() {
    try{

            const usuario = auth.currentUser;

            const listaMedicamentos:any[] = [];

            // MEDICAMENTOS DO PRÓPRIO USUÁRIO

            const meusMedicamentos = query(
                collection(db, 'medicamentos'),
                where('userId', '==', usuario?.uid)
            );

            const meusDocs = await getDocs(meusMedicamentos);

            meusDocs.forEach((doc) => {

                listaMedicamentos.push({
                    id: doc.id,
                    ...doc.data()
                });

            });

            // PACIENTES VINCULADOS

            const cuidadoresQuery = query(
                collection(db, 'cuidadores'),
                where('cuidadorId', '==', usuario?.uid)
            );
            const cuidadoresDocs = await getDocs(cuidadoresQuery);
            for(const cuidadorDoc of cuidadoresDocs.docs){
                const dadosCuidador:any = cuidadorDoc.data();
                const medicamentosPaciente = query(
                    collection(db, 'medicamentos'),
                    where('userEmail', '==', dadosCuidador.pacienteEmail)
                );
                const medsPacienteDocs = await getDocs(medicamentosPaciente);
                medsPacienteDocs.forEach((doc) => {

                    listaMedicamentos.push({
                        id: doc.id,
                        ...doc.data()
                    });

                });

            }
            setMedicamentos(listaMedicamentos);
        }
        catch(error){
            console.log(error);
        }
    }

async function excluirMed(id:string){

    try{

        await deleteDoc(
            doc(db, 'medicamentos', id)
        );
        alert('Medicamento excluido')
        buscarMedicamentos()
    }
    catch(error){

        console.log(error);
    }
}

async function editarMed(
    id:string,
    nomeAtual:string,
    horarioAtual:string
){

    Alert.prompt(

        'Editar nome',
        'Digite o novo nome',

        (novoNome) => {

            if(!novoNome) return;

            Alert.prompt(

                'Editar horário',
                'Digite o novo horário',

            async (novoHorario) => {
                if(!novoHorario) return;

                try{

                    await updateDoc(
                            doc(db, 'medicamentos', id),
                            {
                                nome: novoNome,
                                horario: novoHorario
                            }
                    );
                        alert('Medicamento editado!');
                        buscarMedicamentos();
                    }
                    catch(error){
                        console.log(error);
                    }
                },
                'plain-text',
                horarioAtual
            );
        },
        'plain-text',
        nomeAtual
    );
}

useEffect(() => {

    buscarMedicamentos();
    Notifications.requestPermissionsAsync();
}, []);

useEffect(() => {

    const intervalo = setInterval(() => {

        verificarHorario();

    }, 1000);

    return () => clearInterval(intervalo);

}, [medicamentos, ultimoAlerta]);


async function verificarHorario(){

    const agora = new Date();

    const horaAtual = agora.toLocaleTimeString([], {

        hour: '2-digit',
        minute: '2-digit',
        hour12: false

    });

    console.log('Hora atual:', horaAtual);

    for (const med of medicamentos) {
        console.log('Medicamento:', med.horario);
        if(
            med.horario === horaAtual &&
            ultimoAlerta !== `${med.id}-${horaAtual}`
        ){
            setUltimoAlerta(`${med.id}-${horaAtual}`);
            await Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Hora do remédio 💊',
                    body: `Está na hora de tomar ${med.nome}`,
                    sound: true,
                        },
                trigger: {
                    type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
                    seconds: 1,
                        },
                });
            }
        }
}
    return(
        <View style={style.container}>
            <Text style={style.titulo}>Meus medicamentos</Text>
<FlatList

    ListHeaderComponent={

        <TouchableOpacity
            style={style.botaoReload}
            onPress={buscarMedicamentos}
        >

            <Text style={style.textoReload}>
                🔄 Atualizar
            </Text>

        </TouchableOpacity>

    }
        data={medicamentos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity style={style.cardMed}
                    onPress={() => {
                    Alert.alert(
                        'Medicamento',
                        'Escolha uma opção',
                        [
                        {
                            text: 'Editar',
                            onPress:() => editarMed(item.id, item.nome, item.horario)
                        },
                        {
                            text:'Excluir',
                            onPress:() => excluirMed(item.id)
                        },
                        {
                            text:'Cancelar',
                            style:'cancel'
                        }
                    ]
                )
            }}>
                <Text style={style.nomeMed}>
                    {item.nome}

                </Text>
                <Text style={style.horarioMed}>
                    {item.horario}
                </Text>
            </TouchableOpacity>



        )}
        
        />
        </View>

            
        
    )
}