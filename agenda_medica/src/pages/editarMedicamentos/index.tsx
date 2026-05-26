import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import {doc,updateDoc} from 'firebase/firestore';

import { db} from '../../services/firebaseConfig';

export default function EditarMedicamento(){

    const route:any = useRoute();
    const navigation:any = useNavigation();

    const medicamento = route.params.medicamento;

    const [nome, setNome] = useState(medicamento.nome);
    const [horario, setHorario] = useState(medicamento.horario);

    async function salvarEdicao(){

        try{

            await updateDoc(
                doc(db, 'medicamentos', medicamento.id),
                {
                    nome: nome,
                    horario: horario
            }
            );

            alert('Medicamento atualizado!');
            navigation.goBack();

        }
        catch(error){
        console.log(error);

        }
    }
    return(
        <View
            style={{
                flex:1,
                padding:20,
                justifyContent:'center'
            }}
        >

            <Text
                style={{
                    fontSize:22,
                    fontWeight:'bold',
                    marginBottom:20
                }}
            >
                Editar Medicamento
            </Text>

            <TextInput
                value={nome}
                onChangeText={setNome}
                placeholder='Nome'
                style={{
                    borderWidth:1,
                    borderRadius:10,
                    padding:15,
                    marginBottom:20
                }}
            />
            <TextInput
                value={horario}
                onChangeText={setHorario}
                placeholder='08:30'
                style={{
                    borderWidth:1,
                    borderRadius:10,
                    padding:15,
                    marginBottom:20
                }}
            />
            <TouchableOpacity
                onPress={salvarEdicao}
                style={{
                    backgroundColor:'green',
                    padding:15,
                    borderRadius:10
                }}
            >
                <Text
                    style={{
                        color:'white',
                        textAlign:'center',
                        fontWeight:'bold'
                    }}
                >
                    Salvar
                </Text>
            </TouchableOpacity>
        </View>
    )
}