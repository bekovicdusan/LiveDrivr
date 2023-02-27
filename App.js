import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/authentication/WelcomeScreen';
import CarrierOrDriver from './screens/authentication/CarrierOrDriver';
import LoginScreen from './screens/authentication/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Authentication" component={WelcomeScreen} />
        <Stack.Screen name="CarrierOrDriver" component={CarrierOrDriver} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
