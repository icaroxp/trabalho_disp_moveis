import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../pages/Home'
import { Ionicons } from "@expo/vector-icons";
import CadastroMedicamentos from "../pages/cadastroMedicamentos";
import CadastroCuidador from '../pages/integrarCuidador'
import EditarMedicamento from '../pages/editarMedicamentos'

const Tab = createBottomTabNavigator();
export default function TabRoutes(){

    return(
    
        <Tab.Navigator
  screenOptions={{
    headerShown: false,

    tabBarStyle: {
      backgroundColor: '#000',
      height: 70,
    },

    tabBarActiveTintColor: '#fff',
    tabBarInactiveTintColor: '#999',

    tabBarLabelStyle: {
      fontSize: 12,
      textAlign: 'center',
    },

    tabBarItemStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    tabBarIconStyle: {
      alignSelf: 'center',
    },
  }}
>     
    {/* Barra de navegação */}

            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                //adiçao de icone na barra de navegação
                tabBarIcon: ({color, size}) => ( 
                    <Ionicons
                    name="home"
                    size={size}
                    color={color}

                    />
                )
            }}
            />
            <Tab.Screen
            name="Cadastro"
            component={CadastroMedicamentos}
            options={{
                tabBarIcon: ({color, size}) => ( 
                    <Ionicons
                    name="pencil"
                    size={size}
                    color={color}

                    />
                )
            }}
            />

<Tab.Screen
    name="CadastroCuidador"
    component={CadastroCuidador}
    options={{
        tabBarLabel: 'Cuidador',
        tabBarIcon: ({ color, size }) => (
            <Ionicons
                name="people"
                size={size}
                color={color}
            />
        )
    }}
/>


        </Tab.Navigator> 
    )

}
