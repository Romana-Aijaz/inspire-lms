import React, { useEffect } from 'react';
import { View, Button, Alert, TouchableOpacity } from 'react-native';
import GooglePay from 'react-native-google-pay';

const allowedCardNetworks = ['VISA', 'MASTERCARD'];
const allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS'];

const requestData = {
    cardPaymentMethod: {
        tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            gateway: 'acceptblue', 
            gatewayMerchantId: 'BCR2DN4T6XDOBJIE', 
        },
        allowedCardNetworks,
        allowedCardAuthMethods,
    },
    transaction: {
        totalPrice: '10.00',
        totalPriceStatus: 'FINAL',
        currencyCode: 'USD',
    },
    merchantName: 'LMS-App',
};

const GooglePayButton = () => {
    useEffect(() => {
        // Set the environment to production for live transactions
        GooglePay.setEnvironment(GooglePay.ENVIRONMENT_TEST); // Change to ENVIRONMENT_PRODUCTION when going live

        // Check if Google Pay is available
        GooglePay.isReadyToPay(allowedCardNetworks, allowedCardAuthMethods)
            .then((ready) => {
                if (ready) {
                    console.log('Google Pay is available');
                } else {
                    Alert.alert('Google Pay is not available');
                }
            })
            .catch((error) => console.log(error));
    }, []);

    const handleGooglePayPress = () => {
        GooglePay.requestPayment(requestData)
            .then((token) => {
                // Handle the token received from Google Pay
                console.log(token);
                Alert.alert('Payment successful!', `Token: ${token}`);
            })
            .catch((error) => console.log(error));
    };

    return (
        <View style={{ padding: 20 }}>
            <Button title="Pay with Google Pay" onPress={handleGooglePayPress} />
            <TouchableOpacity onPress={handleGooglePayPress}>Pay With Google</TouchableOpacity>
        </View>
    );
};

export default GooglePayButton;
