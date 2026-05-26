import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../pages/Home'
import Alertas from "../pages/alertas";
import { Ionicons } from "@expo/vector-icons";
import CadastroMedicamentos from "../pages/cadastroMedicamentos";
import CadastroCuidador from '../pages/integrarCuidador'
import EditarMedicamento from '../pages/editarMedicamentos'

const Tab = createBottomTabNavigator();
export default function TabRoutes(){

    return(
        
        <Tab.Navigator screenOptions={{

        tabBarStyle: {
            backgroundColor: '#000',
            height: 70,
        },
        tabBarActiveTintColor: '#fff',

        tabBarInactiveTintColor: '#999',
        tabBarLabelStyle: {
            fontSize: 12,

            backgroundColor:'000'
        },
        tabBarItemStyle: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        





    }}>     
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
            name="Alertas"
            component={Alertas}
            options={{
                tabBarIcon: ({color, size}) => (
                <Ionicons
                name="alert"
                size={size}
                color={color}
                />
                )
            }}
            />
            <Tab.Screen
            name="CadastroCuidador"
            component={CadastroCuidador}
            />

        <Tab.Screen
        name="EditarMedicamento"
        component={EditarMedicamento}
        options={{
            tabBarButton: () => null,
            tabBarStyle: { display: 'none' }
            }}
        />
            

        </Tab.Navigator>

        
        
    )

}
