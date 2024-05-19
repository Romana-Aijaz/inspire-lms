import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Svg, {SvgUri} from 'react-native-svg';

export const WelcomeSlide = () => {
    const navigation = useNavigation();

    const goToLogin = () => {
        navigation.navigate('TabNavigator');
    };
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
                <View style={styles.imgContainer}>
                    <Svg width="140%" height="140%" viewBox="0 0 150 160">
                        <SvgUri
                            width="100%"
                            height="100%"
                            uri={"https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/alphachannel.svg"}
                        />
                    </Svg>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Welcome to Inspire Management Training Centre</Text>
                    <Text style={styles.subText}>We offer a tailored educational experience designed to empower professionals with cutting-edge skills and knowledge. Seamlessly integrating interactive modules, personalized learning paths, and real-world case studies, our platform ensures an engaging and effective training journey.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, { marginLeft: '-2%' }]} onPress={() => goToLogin()}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => goToLogin()} style={[styles.button, { marginRight: '-2%', borderTopRightRadius: 0, borderBottomRightRadius: 0, borderTopLeftRadius:50, borderBottomLeftRadius: 50 } ]}>
                        <Text style={styles.buttonText}>Skip</Text>
                    </TouchableOpacity>
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
        alignItems: 'center',
        alignSelf:'center',
        top: 60,
        textAlign: 'center'
    },
    textContainer: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        padding: '5%',
    },
    subText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 0,
        top: 65,
        textAlign: 'center'
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: '80.35%',
    },
    button: {
        backgroundColor: '#281483', // Button background color
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '35%',
    },
    buttonText: {
        color: '#fff', // Button text color
        fontSize: 16,
        fontWeight: 'bold',
    },
    imgContainer: {
        position: 'absolute',
        bottom: '60%',
        width: '40%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});