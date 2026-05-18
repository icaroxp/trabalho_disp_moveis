import { View, Text, TextInput, Touchable, TouchableOpacity, FlatList, TextInputComponent} from 'react-native';
import {style} from "./styles";
import React, {useState} from 'react';


export default function CadastroMedicamentos(){
    
    const [ nome, setNome] = useState('');
    const [horario, setHorario] = useState('');
    //useState<any[]>([]) == Medicamento pode guardar qualquer tipo de valor dentro da lista
    const [medicamentos, setMedicamentos] = useState<any[]>([]); 

    function adicionarMedicamento(){
        const novoMedicamento={
            id: Date.now(),
            nome: nome,
            horario: horario,
        }
        setMedicamentos([...medicamentos, novoMedicamento])
        setNome('');
        setHorario('');
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
            <TextInput
            value={horario}
            onChangeText={setHorario}
            placeholder='12:00'
            style={style.input}
            />

            <View style={style.buttonMarign}>
                <View style={style.buttonLogin}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    > 
                    <Text style={style.buttonInput}>Cadastrar</Text>
                </TouchableOpacity>
                </View>

            </View>





        </View>

            
        
    )
}