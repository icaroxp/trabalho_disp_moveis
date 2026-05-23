import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import {style} from "./styles";
import React, {useState} from 'react';
import {db, auth} from '../../services/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore';
import DateTimePicker from '@react-native-community/datetimepicker';




export default function CadastroMedicamentos(){
    
    const [ nome, setNome] = useState('');
    const [horario, setHorario] = useState(new Date());
    const [mostrarHorario, setMostrarHorario] = useState(false)
    
    //A função criada abaixo tem o objetivo que criar um campo de seleção de data
    function selecionarHorario(event:any, selectedDate:any){ 

    //usuario seleciona uma hora e ele é salvo na constante, caso ele cancele o horario antigo permanece
    const currentDate = selectedDate || horario;
    setMostrarHorario(false)
    setHorario(currentDate)
}

    async function adicionarMedicamento() {
    try{
        const user = auth.currentUser;

        await addDoc(
            //criação da coleção medicamentos e faz o cadastro das informações dentro do firebase
            collection(db,'medicamentos'),
            {
                nome: nome,
                horario: horario.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            }),
                userId:user?.uid,
                userEmail:user?.email
            }
        );
        alert('Medicamento cadastrado')
        //Limpa o campo novamente
        setNome('');
        setHorario(new Date());
    }
    catch(error:any){
        console.log(error);
        // alert(error.message)
        alert('Erro ao cadastrar medicamentos')

    }
}


    return(
        <View style = {style.homeInitial}>
            <Text style={style.textNomeRemedio}>
                Nome do Remédio
            </Text>
            <TextInput
            value={nome}
            onChangeText={setNome}
            placeholder='Novalgina'
            style={style.input}
            />
            <Text style={style.textHorario}>
                Horário
            </Text>
{/* */}
<TouchableOpacity
    style={style.input}
    onPress={() => setMostrarHorario(true)}
>
    <Text>

        {horario.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        })}

    </Text>

</TouchableOpacity>

{mostrarHorario && ( 
    <View style={style.mostrarHorario}>
    <DateTimePicker
        value={horario}
        mode="time"
        is24Hour={true}
        display="spinner"
        onChange={selecionarHorario}
    />
    </View>

)}

            <View style={style.buttonMarign}>
                <View style={style.buttonLogin}>
                <TouchableOpacity
                    onPress={adicionarMedicamento}
                    > 
                    <Text style={style.buttonInput}>Cadastrar</Text>
                </TouchableOpacity>
                </View>

            </View>





        </View>

            
        
    )
}