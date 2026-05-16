import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../pages/Home'
import Medicamentos from "../pages/medicamentos";
import Alertas from "../pages/alertas";

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
        },

        tabBarItemStyle: {
            justifyContent: 'center',
            alignItems: 'center',
        }

    }}>
            <Tab.Screen
            name="Home"
            component={Home}
            />


            <Tab.Screen
            name="Medicamentos"
            component={Medicamentos}
            />

            <Tab.Screen
            name="Alertas"
            component={Alertas}
            />

            

        </Tab.Navigator>
    )

}
