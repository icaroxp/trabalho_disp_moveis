import { View, Text, TextInput, Touchable, TouchableOpacity, FlatList, TextInputComponent} from 'react-native';
import {style} from "./styles";
import React, {useState} from 'react';
import {db, auth} from '../../services/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore';
import DateTimePicker from '@react-native-community/datetimepicker';




export default function Cuidador(){

    const [emailPaciente, setEmailPaciente] = useState('');

    async function vincularPaciente(){

        try{
            const cuidador = auth.currentUser;
            await addDoc(collection(db, 'cuidadores'), {
                cuidadorId: cuidador?.uid,
                cuidadorEmail: cuidador?.email,

                pacienteEmail: emailPaciente

            });

            alert('Paciente vinculado!');

            setEmailPaciente('');
        }
        catch(error){
            console.log(error);
        }
    }
    return(

        <View style={{flex:1, padding:20}}>

            <Text
                style={{
                    fontSize:22,
                    fontWeight:'bold',
                    marginBottom:20
                }}
            >
                Vincular Paciente
            </Text>

            <TextInput
                placeholder='Email do paciente'
                value={emailPaciente}
                onChangeText={setEmailPaciente}
                style={{
                    borderWidth:1,
                    padding:15,
                    borderRadius:10
                }}
            />
            <TouchableOpacity
                onPress={vincularPaciente}
                style={{
                    backgroundColor:'green',
                    padding:15,
                    borderRadius:10,
                    marginTop:20
                }}
            >
                <Text
                    style={{
                        color:'white',
                        textAlign:'center',
                        fontWeight:'bold'
                    }}
                >
                    Vincular
                </Text>

            </TouchableOpacity>

        </View>

    );
}