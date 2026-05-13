import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';
import Cadastro from './src/pages/register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Help Brasil"
        component={Login}
        />

        <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        />
        </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
