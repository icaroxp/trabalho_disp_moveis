import React, {useState} from "react"; //importando funçoes da biblioteca react

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
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../services/firebaseConfig'

//Aqui estamos criando o componente de login
export default function Login({ navigation}: any){ 
    // variáveis criadas para que possamos guardar informações de login:
    const [email, setEmail] = useState(''); 
    const [senha, setSenha] = useState('');
    //criando uma função assincrona (que espera retorno das operaçoes)
    async function logarUsuario(){ 
        try{
            //Criação da função usuario que espera o firebase dar retorno as variaveis
            const user = await signInWithEmailAndPassword( 
                auth, email, senha
            );
            alert('Login realizado!')
            console.log(user);
            navigation.navigate('Home')
        }
        //tratamento de erro de login
        catch(error:any){
            if(error.code === 'auth/invalid-credential'){
                alert('Email ou senha incorretos, verifique-os e faça login novamente')
            }
        else if(error.code === 'auth/invalid-email'){
            alert('email inválido, faça o registro!')
        }
        else{
            alert('Erro ao fazer login')
        }
            // console.log(error);
            // alert(error.message);

        }
    }
    return( 

        <View style ={style.container}> 
            <View style={style.boxTop}>
                <Text style ={style.nossaLogo}>Nossa logo aqui</Text>
                <Text style={style.text}>Faça o Login em nosso aplicativo!</Text>
            </View>
            <View style={style.boxMid}> 
                <Text>Endereço de email</Text>
                <TextInput value={email} onChangeText={setEmail} style={style.textInput}/>
                <Text>Senha</Text>
                <TextInput value={senha} onChangeText={setSenha} secureTextEntry={true} style={style.textInput}/>
                <View style={style.buttonMarign}>
                    <View style={style.buttonLogin}>
                    {/* Quando o botão for apertado, a minha função é chamada e faz o envio das informações ao firebase */}
                    <TouchableOpacity
                    onPress={logarUsuario} 
                    > 
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