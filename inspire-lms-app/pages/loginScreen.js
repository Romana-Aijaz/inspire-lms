import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';
import { setCountry, setCity, setEmail, setPassword, setFullName, setUsername, setId, setAuthToken, setCoursesEnrolled } from '../redux/reducers';
import axios from 'axios';


async function getUsersByField(token, fieldName, fieldValue) {
    try {
        const response = await axios.get('https://lmsdemo.inspire.qa/webservice/rest/server.php', {
            params: {
                wstoken: token,
                wsfunction: 'core_user_get_users_by_field',
                field: fieldName, // Field to search for (e.g., username, email)
                values: [fieldValue], // Value of the field to search for
                moodlewsrestformat: 'json'
            }
        });

        // Assuming user data is returned in the response
        const users = response.data;
        if (users.length === 0) {
            // No user found with the given value
            return 'User is not registered.';
        }
        return users;
    } catch (error) {
        console.error('Error:', error.message);
        throw new Error('Failed to retrieve users by field due to an unknown error.');
    }
}

async function getToken(username, password) {
    try {
        const response = await axios.get('https://lmsdemo.inspire.qa/login/token.php', {
            params: {
                username: username,
                password: password,
                service: 'moodle_mobile_app'
            }
        });

        if (response.data && response.data.token) {
            return response.data.token;
        } else {
            throw new Error('Failed to retrieve token: ', response.data);
        }
    } catch (error) {
        throw new Error('Error fetching token: ', error.message);
    }
}

export const LoginScreen = ({ navigation }) => {
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const dispatch = useDispatch();

    const handleUsernameChange = (newUsername) => {
        setNewUsername(newUsername);
    };

    const handlePasswordChange = (newPassword) => {
        setNewPassword(newPassword);
    };

    // Function to handle login
    const handleLogin = async () => {
        console.log("Logging in...");
        if (!newUsername.trim() || !newPassword.trim()) {
            Alert.alert('Incomplete Information', 'Please fill in both email and password fields.');
            return;
        }
        try {
            const token = await getToken(newUsername, newPassword);
            if (token) {
                console.log(token)
                const userInfo = await getUsersByField(token, 'username', newUsername);
                console.log(userInfo)
                const user = userInfo.find(user => user.username === newUsername);
                if (user) {
                    dispatch(setEmail(user.email));
                    {user.city ? dispatch(setCity(user.city)) : null}
                    dispatch(setUsername(user.username));
                    dispatch(setPassword(newPassword));
                    dispatch(setFullName(user.fullname));
                    { user.country ? dispatch(setCountry(user.country)) : null}
                    dispatch(setId(user.id));
                    dispatch(setCoursesEnrolled(user.enrolledcourses || []));
                    dispatch(setAuthToken(token))
                } else {
                    Alert.alert('Not Registered', 'You are not registered in the system.');
                }
            }
        } catch (error) {
            Alert.alert('Invalid login, please try again');
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
                    placeholder="Username"
                    placeholderTextColor="#281483"
                    keyboardType="email-address"
                    onChangeText={handleUsernameChange}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#281483"
                    secureTextEntry={true}
                    onChangeText={handlePasswordChange}
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