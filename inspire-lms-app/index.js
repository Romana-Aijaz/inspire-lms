import { StyleSheet, Text, View } from 'react-native';
import { WelcomePage } from './pages/welcomeScreen';
import { LoginScreen } from './pages/loginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './components/TabNavigator';
import { useSelector } from 'react-redux';
import { CourseScreen } from './pages/courseScreen';
const Stack = createNativeStackNavigator();

export default function Index() {
    const email = useSelector(state => state.auth.email);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Welcome'}>
                <Stack.Screen
                    name="Welcome"
                    component={WelcomePage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="TabNavigator"
                    component={email ? TabNavigator : LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Course"
                    component={CourseScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});