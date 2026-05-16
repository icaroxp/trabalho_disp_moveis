import { View, Text} from 'react-native'
import React, { useState } from "react"; //importando funçoes da biblioteca react

import { 
    Image,
    TextInput,
    Pressable,
    TouchableOpacity
}   from 'react-native';//Importando componentes do react native

import { style } from './styles'; //Importando os estilos da pasta .style

export default function Cadastro(){
    const [ email, setEmail] = useState('');
    const [ senha, setSenha] = useState('');
    const [ confirmaSenha, setConfirmaSenha] = useState('');
    return( 
    <View style ={style.container}> 
        <View style={style.boxTop}>
                
            <Text style={style.text}>Faça o registro em nosso aplicativo!</Text>
        </View>
        <View style={style.boxMid}> 
            {/* <Text>Endereço de email</Text> */}
            <TextInput 
            value={email} onChangeText={setEmail}
            placeholder="Digite seu email" style={[style.textInput, style.textIputAlign]}
            />
            <TextInput 
            value={senha} onChangeText={setSenha}
            secureTextEntry={true} placeholder="Digite sua senha" style={style.textInput}
            />
            <TextInput 
            value={confirmaSenha} onChangeText={setConfirmaSenha}
            secureTextEntry={true} placeholder="Confirme sua senha" style={style.textInput}
            />
            <View style={style.buttonMarign}>
            <View style={style.buttonLogin}>
                <TouchableOpacity 
                onPress={() => 
                {
                    if(senha !== confirmaSenha){
                    alert('As senhas são diferentes!');
                    return;
                    }
                alert('Cadastro Realizado')
                }}
                >
                
                <Text>Registrar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
        <View style={style.boxBottom}>

        </View>
    </View>
    )
}