import React from "react"; //importando a biblioteca react

import { 
    Text,
    View,
    Image,
    TextInput,
    Pressable
}   from 'react-native';//Importando componentes do react native

import {style} from "./styles"; //Importando os estilos da pasta .style
import Logo from '../../assets/Logo.jpg' //Importando nossa foto de logo da tela de login

export default function Login (){ //Aqui estamos criando o componente de login
    return( //retornando valor para minha função
        <View style ={style.container}> {/* container principal*/}
            <View style={style.boxTop}>
                <Text style ={style.nossaLogo}>Nossa logo aqui</Text>
                {/* <Image
                source={Logo}
                style={style.Logo}        
                /> */}
                <Text style={style.text}>Faça o Login em nosso aplicativo!</Text>
            </View>
            <View style={style.boxMid}> {/* container do meio dentro do principal, onde contém os inputs */}
                <Text>Endereço de email</Text>
                <TextInput style={style.textInput}/>
                <Text>Senha</Text>
                <TextInput style={style.textInput}/>
                <View style={style.submitInicial}>
                <Pressable>Enviar</Pressable>
                </View>
            </View>
            <View style={style.boxBottom}>
                <Text>boxBottom</Text>
            </View>
        </View>
    )
}