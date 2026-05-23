import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        justifyContent:'center'
    },
    titulo:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20
    },
    input:{
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:10,
        padding:15,
        marginBottom:20
    },
    botao:{
        backgroundColor:'gray',
        padding:15,
        borderRadius:10,
        alignItems:'center'
    },
    textoBotao:{
        color:'white',
        fontWeight:'bold'
    }
})