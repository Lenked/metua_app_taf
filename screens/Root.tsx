import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "./Auth/login/LoginScreen"
import FirstScreen from "./Auth/FirstScreen"
import Home from "./Home/home"
import CheckedInScreen from "./Auth/checkedIn/CheckedInScreen"

const tabs = createNativeStackNavigator()

export default function Root() {
  return (
    <tabs.Navigator>
    
        <tabs.Screen name="index" component={FirstScreen} options={{headerShown: false}} />
        <tabs.Screen name="login" component={LoginScreen} options={{headerShown: false}} />
        <tabs.Screen name="home" component={Home} options={{headerShown: false}} />
        <tabs.Screen name="checkedIn" component={CheckedInScreen} options={{headerShown: false}} />
        
    </tabs.Navigator>
  )
}
