import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const DetailSlide = () => {
    return (
        <LinearGradient
            colors={['#281483', '#8F6ED5', '#D782D9']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        > 
            <View style={styles.imageContainer}>
                <Image source={require('../assets/bookGuy.png')} style={styles.image} />
            </View>
            <View style={styles.container}>
                <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 50, left: 20 }]} />
                <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 150, right: 20 }]} />
                <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 250, left: '50%' }]} />
                <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 350, right: '50%' }]} />
                <View style={[styles.circle, { backgroundColor: '#8F6ED5', bottom: 150, left: 20 }]} />
                <View style={[styles.circle, { bottom: 50, right: 20, backgroundColor: '#8F6ED5' }]} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Pick a Course and</Text>
                    <Text style={[styles.text, { color: '#281483' }]}>Get Results!</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
    },
    imageContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        top: 55
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain', // Make sure the image fits within its container
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
        fontSize: 50,
        fontWeight: 'bold',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'left',
        height: '50%',
        width: '100%',
        padding: '5%',
        top: -30
    },
    buttonContainer: {
        width: 250,
        alignSelf: 'flex-end'
    }, 
    button: {
        backgroundColor: '#281483', // Button background color
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        top: -70,
    },
    buttonText: {
        color: '#fff', // Button text color
        fontSize: 16,
        fontWeight: 'bold',
    }
});