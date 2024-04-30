import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export const LoginSlide = () => {
    return (
        <LinearGradient
          colors={['#281483', '#8F6ED5', '#D782D9']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.container}
        >
        <View style={styles.container}>
            <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 50, left: 20 }]} />
            <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 150, right: 20 }]} />
            <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 250, left: '50%' }]} />
            <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 350, right: '50%' }]} />
            <View style={[styles.circle, { backgroundColor: '#8F6ED5', bottom: 150, left: 20 }]} />
            <View style={[styles.circle, { bottom: 50, right: 20, backgroundColor: '#8F6ED5' }]} />
            <View style={styles.textContainer}>
               <Text style={[styles.text, {alignSelf: 'center'}]}>logo</Text>
               <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: 'white', top: 20}]}>
                    <Text style={[styles.buttonText, {color: '#281483'}]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    </LinearGradient>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#D782D9', // Light purple color
        position: 'absolute',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'left',
        height: 40,
        padding: '5%',
    },
    buttonContainer: {
        flexDirection: 'colum',
        width: 300,
        top: 80
    },
    button: {
        backgroundColor: '#281483', // Button background color
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60
    },
    buttonText: {
        color: '#fff', // Button text color
        fontSize: 16,
        fontWeight: 'bold',
    },
});