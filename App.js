import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/authentication/WelcomeScreen';
import CarrierOrDriver from './screens/authentication/CarrierOrDriver';
import LoginScreen from './screens/authentication/LoginScreen';
import DriverRegister from './screens/authentication/driver/DriverRegister';
import CarrierRegister from './screens/authentication/carrier/CarrierRegister';
import VerifyPhone from './screens/authentication/VerifyPhone';
import WelcomeOnboarding from './screens/onboarding/WelcomeOnboarding';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Authentication" component={WelcomeScreen} />
        <Stack.Screen name="CarrierOrDriver" component={CarrierOrDriver} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="DriverRegister" component={DriverRegister} />
        <Stack.Screen name="CarrierRegister" component={CarrierRegister} />
        <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
        <Stack.Screen name="WelcomeOnboarding" component={WelcomeOnboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
