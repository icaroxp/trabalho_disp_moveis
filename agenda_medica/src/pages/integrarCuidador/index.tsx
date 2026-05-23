import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { style } from './styles'

import {db, auth} from '../../services/firebaseConfig';
import{addDoc, collection} from 'firebase/firestore';

export default function CadastroCuidador(){
    const [emailPaciente, setEmailPaciente] = useState('')
    async function vincularPaciente() {
        try{
            const usuario = auth.currentUser;
            await addDoc(
                collection(db, 'cuidadores'),
                {
                    cuidadorId:usuario?.uid,
                    pacienteEmail: emailPaciente
                }
            )
            alert('Paciente vinculado com sucesso')
            setEmailPaciente('')
        }
        catch(error){
            console.log(error)
            alert('Erro ao vincular paciente')
        }

    }
    return(
        <View style={style.container}>
            <Text style={style.titulo}> Vincular paciente</Text>
            <TextInput
            placeholder='Email do paciente'
            value={emailPaciente}
            onChangeText={setEmailPaciente}
            style={style.input}
            />
            <TouchableOpacity style={style.botao} onPress={vincularPaciente}>
            <Text style={style.textoBotao}> Vincular</Text>
            </TouchableOpacity>
        </View>
    )
}
