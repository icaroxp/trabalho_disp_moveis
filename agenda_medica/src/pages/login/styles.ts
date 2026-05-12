import { Dimensions, StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        // padding:20
    },
    boxTop:{
        width: '100%',
        height: Dimensions.get('window').height/3,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxMid:{
        width:'100%',
        height: Dimensions.get('window').height/5,
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxBottom:{
        width:'100%',
        height: Dimensions.get('window').height/3,
        // backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Logo:{
        height: 100,
        width: 100,
        resizeMode: 'contain',
    },
    text:{
        fontWeight:'bold'
    },
    textInput:{
        width: '90%',
        borderWidth: 1,
        borderRadius: 15,
    },
    nossaLogo:{
        paddingBottom: 50
    },
    submitInicial:{
        width: '40%',
        borderWidth: 1,
        borderRadius: 15,
        textAlign: 'center',
        marginTop: 30
        
    }
    
})

