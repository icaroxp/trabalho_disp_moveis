import { View, Text, FlatList, Alert, Touchable, TouchableOpacity } from 'react-native';
import {style} from "./styles";
import React, {useState, useEffect} from 'react';
import{ collection, doc, getDocs, query, where} from 'firebase/firestore';
import { db, auth} from '../../services/firebaseConfig'
export default function Home(){

const [medicamentos, setMedicamentos] = useState<any[]>([]);
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

        alert('Medicamento excluído');
    }
    catch(error){

        console.log(error);
    }
}
useEffect(() =>{
    buscarMedicamentos()
}, []);
    return(
        <View style={style.container}>
            <Text style={style.titulo}>Meus medicamentos</Text>
        

        <FlatList
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
                            text: 'Editar'
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