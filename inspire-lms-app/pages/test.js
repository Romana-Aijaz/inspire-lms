import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, Platform } from 'react-native';
import { useStripe, usePlatformPay, PlatformPayButton } from '@stripe/stripe-react-native';
import axios from 'axios';

// Google Pay icon image import
import googlePay from '../assets/googlePay.png'; // Adjust the path as per your project structure
import applePay from '../assets/applePay.png';
const Test = () => {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const { isPlatformPaySupported, confirmPlatformPayPayment } = usePlatformPay();
    const [isApplePaySupported, setIsApplePaySupported] = useState(false);

    useEffect(() => {
        (async function () {
            setIsApplePaySupported(await isPlatformPaySupported());
        })();
    }, [isPlatformPaySupported]);

    console.log(isApplePaySupported)
    // useEffect(() => {
    //     // (async function () {
    //     //     const isSupported = await isPlatformPaySupported({ googlePay: { testEnv: true } });
    //     //     console.log('Google Pay support:', isSupported);
    //     //     if (!isSupported) {
    //     //         Alert.alert('Google Pay is not supported.');
    //     //     } else {
    //     //         console.log('Google Pay is supported.');
    //     //         initializePaymentSheet();
    //     //     }
    //     // })();
    //     initializePaymentSheet();
    // }, []);
    // useEffect(() => {
    //     const checkPlatformPaySupport = async () => {
    //         const isSupported = await isPlatformPaySupported({ googlePay: { testEnv: true } });
    //         if (!isSupported) {
    //             Alert.alert('Google Pay is not supported on this device.');
    //         }
    //     };

    //     checkPlatformPaySupport();
    // }, []);


    const initializePaymentSheet = async () => {
        try {
            // const createConnectedAccount = await axios.post('http://192.168.100.42:3000/create-connected-account');
            // console.log(createConnectedAccount)
            const response = await axios.post('http://192.168.100.42:3000/payment-sheet', {
                amount: 2000, // Example amount in cents
            });
            const { paymentIntent, ephemeralKey, customer } = response.data;
            console.log(response.data)
            const { error } = await initPaymentSheet({
                paymentIntentClientSecret: paymentIntent,
                customerEphemeralKeySecret: ephemeralKey,
                customerId: customer,
                merchantDisplayName: 'Your Merchant Name', // Add your merchant name here
                googlePay: {
                    merchantCountryCode: 'US',
                    currencyCode: 'USD',
                    testEnv: true,
                },
            });

            if (!error) {
                console.log('PaymentSheet initialized');
            } else {
                console.error('Error initializing PaymentSheet', error);
            }
        } catch (error) {
            console.error('Error fetching payment sheet data', error);
        }
    };

    const openPaymentSheet = async () => {
        const { error } = await presentPaymentSheet();
        if (error) {
            Alert.alert(`Error: ${error.message}`);
        } else {
            Alert.alert('Success', 'Your payment was successful!');
        }
    };

    return (
        <View style={styles.container}>
            {Platform.OS === 'android' ? (
                <PlatformPayButton
                    onPress={openPaymentSheet}
                    style={{
                        width: '100%',
                        height: 50,
                    }}
                />
            ) : (<TouchableOpacity 
                style={styles.appleButton}
            >
               <Image source={applePay} style={styles.icon} />
            </TouchableOpacity>)}           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        width: '80%'
    },
    appleButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        width: '80%',
        borderWidth: 1,
        borderColor: '#000',
    },
    icon: {
        width: 100,
        height: 50,
        borderRadius: 5,
        marginRight: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    appleButtonText: {
        color: '#000',
    },
});

export default Test;



