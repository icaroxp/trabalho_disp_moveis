import { Dimensions, StyleSheet } from 'react-native';
import { BottomTabs } from 'react-native-screens';

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
        height: 50,
        borderWidth: 1,
        borderRadius: 15,
        margin: 5,
        paddingLeft: 10,
    },
    buttonLogin:{
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bebebe',
        borderRadius: 40
    },
    txtRegister:{
        fontWeight:'bold',
        color: '#36366b'
    },
    buttonMarign:{
        paddingTop: 15
    },
    textIputAlign:{
        marginBottom: 30
    }

    
})

