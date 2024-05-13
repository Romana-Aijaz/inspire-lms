import React, {useState} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const users = [
    { email: 'user1@example.com', password: 'password123' },
    { email: 'user2@example.com', password: 'abc123' },
    { email: 'user3@example.com', password: 'qwerty' },
];

export const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle login
    const handleLogin = () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert('Incomplete Information', 'Please fill in both email and password fields.');
            return;
        }

        const user = users.find(user => user.email === email);
        if (user) {
            if (user.password === password) {
                navigation.navigate("TabNavigator");
            } else {
                Alert.alert('Incorrect Password', 'Please enter the correct password.');
            }
        } else {
            Alert.alert('Not Registered', 'You are not registered. Please sign up first.');
        }
    };
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#281483', '#8F6ED5', '#D782D9']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >
                <View style={styles.container}>
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 10, left: 20 }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 0, right: 20 }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 50, left: '50%' }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 80, right: '30%' }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', bottom: 100, left: 200 }]} />
                    <View style={[styles.circle, { bottom: 100, right: 90, backgroundColor: '#8F6ED5' }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 130, left: 90 }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 0, right: 20 }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 30, left: '80%' }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 150, left: '93%' }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 300, left: '70%' }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', bottom: 700, left: 200 }]} />
                    <View style={[styles.circle, { bottom: 100, right: 90, backgroundColor: '#8F6ED5' }]} />
                </View>
            </LinearGradient>
            <View style={styles.loginContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#281483"
                    keyboardType="email-address"
                    onChangeText={setEmail}
                />               
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#281483"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <LinearGradient 
                colors={['#D782D9', '#8F6ED5', '#281483']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.gradient, { top: '75%', borderTopRightRadius: 1500, borderBottomLeftRadius: 0 }]}
            >
                <View style={styles.container}>
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 10, left: 20 }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 0, right: 20 }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 50, left: '50%' }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 80, right: '30%' }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', bottom: 100, left: 200 }]} />
                    <View style={[styles.circle, { bottom: 100, right: 90, backgroundColor: '#8F6ED5' }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 130, left: 90 }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 0, right: 20 }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 30, left: '80%' }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 150, left: '93%' }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 300, left: '70%' }]} />
                    <View style={[styles.circle, { backgroundColor: '#8F6ED5', bottom: 700, left: 200 }]} />
                    <View style={[styles.circle, { bottom: 100, right: 90, backgroundColor: '#8F6ED5' }]} />
                </View>
            </LinearGradient>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
       flex: 1,
       alignSelf: 'flex-start',
       position: 'relative'
    },
    gradient: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        width: '100%',
        height: '40%',
        borderBottomLeftRadius: 600, // Adjust the radius as needed
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#D782D9', // Light purple color
        position: 'absolute',
    },
    loginContainer: {
        flex: 1,
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        position: 'absolute',
        top: '45%'
    },
    input: {
        height: 40,
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: '#281483',
        borderRadius: 5,
        color: '#281483',
        fontSize: 16
    },
    buttonContainer: {
        flex: 1,
        width: '50%',
        position: 'absolute',
        top: '70%',
       left: '60%'
    },
    button: {
        backgroundColor: '#8F6ED9', // Button background color
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
    },
    buttonText: {
        color: '#fff', // Button text color
        fontSize: 16,
        fontWeight: 'bold',
    }
});