import React, { AnyActionArg } from "react"; //importando a biblioteca react

import { 
    Text,
    View,
    Image,
    TextInput,
    Pressable,
    TouchableOpacity
}   from 'react-native';//Importando componentes do react native

import {style} from "./styles"; //Importando os estilos da pasta .style
import Logo from '../../assets/Logo.jpg' //Importando nossa foto de logo da tela de login


export default function Login({ navigation}: any){ //Aqui estamos criando o componente de login
    return( //retornando valor para minha função
        <View style ={style.container}> 
            <View style={style.boxTop}>
                <Text style ={style.nossaLogo}>Nossa logo aqui</Text>
                <Text style={style.text}>Faça o Login em nosso aplicativo!</Text>
            </View>
            <View style={style.boxMid}> 
                <Text>Endereço de email</Text>
                <TextInput style={style.textInput}/>
                <Text>Senha</Text>
                <TextInput secureTextEntry={true} style={style.textInput}/>
                <View style={style.buttonMarign}>
                    <View style={style.buttonLogin}>
                    <TouchableOpacity>
                    <Text>Entrar</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            <View style={style.boxBottom}>
                <Text>Ainda não tem cadastro?</Text>
                <Pressable onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={style.txtRegister}>Cadastre-se</Text>
                </Pressable>
            </View>
        </View>
    )
}