import React, { useEffect } from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';
import Test from './test';
import { SafeAreaView } from 'react-native';
import GooglePay from 'react-native-google-pay';
import GooglePayButton from '../pages/googlePayButton'; // Adjust path as needed

const StripeProviderScreen = () => {
    return (
        <StripeProvider
            publishableKey="pk_test_51L5ah3HGD1qyTXcMsH1N5NCfGxAsQG1G6zPVP3FeoQWi5F7alyJi6uCgldgkN63GtPSCYeyi0Hpku5BI1oKzrrdK00x0k8HSse"
            urlScheme="your-url-scheme"
            merchantIdentifier="merchant.com.your-app" // For Apple Pay
        >
            <Test />
        </StripeProvider>
        // <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //     <GooglePayButton />
        // </SafeAreaView>
    );
};

export default StripeProviderScreen;
