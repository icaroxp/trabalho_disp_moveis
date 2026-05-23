import { View, Text, FlatList, Alert, Touchable, TouchableOpacity } from 'react-native';
import {style} from "./styles";
import React, {useState, useEffect} from 'react';
import{ collection, doc, getDocs, query, where, updateDoc, deleteDoc} from 'firebase/firestore';
import { db, auth} from '../../services/firebaseConfig'
export default function Home(){

const [medicamentos, setMedicamentos] = useState<any[]>([]);
const [ultimoAlerta, setUltimoAlerta] = useState('');
async function buscarMedicamentos() {
    try{
        //pega o usuario logado e coloca na constante user
        const usuario = auth.currentUser
        //busca os medicamentos do usuario logado
        const medUsuario = query(
            collection(db, 'medicamentos'),
            where('userId', '==', usuario?.uid)
        );
        const querySnapshot = await getDocs(medUsuario)
        //Esse array vazio é quem vai receber os medicamentos
        const listaMedicamentos:any[]= [];

        querySnapshot.forEach((doc) => {
            listaMedicamentos.push({
                id: doc.id, ...doc.data()
            });
        });
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

}, []);

useEffect(() => {

    const intervalo = setInterval(() => {

        verificarHorario();

    }, 1000);

    return () => clearInterval(intervalo);

}, [medicamentos, ultimoAlerta]);


function verificarHorario(){

    const agora = new Date();

    const horaAtual = agora.toLocaleTimeString([], {

        hour: '2-digit',
        minute: '2-digit',
        hour12: false

    });
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