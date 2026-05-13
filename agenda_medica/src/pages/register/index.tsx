import { View, Text} from 'react-native'
import React, { AnyActionArg } from "react"; //importando a biblioteca react

import { 
    Image,
    TextInput,
    Pressable,
    TouchableOpacity
}   from 'react-native';//Importando componentes do react native

import {style} from "./styles"; //Importando os estilos da pasta .style
import Logo from '../../assets/Logo.jpg' //Importando nossa foto de logo da tela de login
export default function Cadastro(){
        return( 
        <View style ={style.container}> 
            <View style={style.boxTop}>
                
                <Text style={style.text}>Faça o registro em nosso aplicativo!</Text>
            </View>
            <View style={style.boxMid}> 
                {/* <Text>Endereço de email</Text> */}
                <TextInput placeholder="Digite seu email" style={[style.textInput, style.textIputAlign]}/>
                <TextInput secureTextEntry={true} placeholder="Digite sua senha" style={style.textInput}/>
                <TextInput secureTextEntry={true} placeholder="Confirme sua senha" style={style.textInput}/>
                <View style={style.buttonMarign}>
                <View style={style.buttonLogin}>
                    <TouchableOpacity>
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