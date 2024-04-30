import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export const WelcomeSlide = () => {
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
               <Text style={styles.text}>Welcome to Inspire Management Training Centre</Text>
               <Text style={styles.subText}>Unlocking Potential, Transforming Teams</Text>
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
        height: '50%',
        padding: '5%',
    },
    subText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 0
    }
});