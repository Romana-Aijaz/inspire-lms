import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { WelcomeSlide } from './WelcomeSlide';
import { DetailSlide } from './DetailSlide';
import { LoginSlide } from './LoginSlide';

export const Slider = () => {
    return (
        <Swiper
            autoplay={true}
            autoplayTimeout={2.5}
            loop={true}
            style={styles.wrapper}
        >
            <View style={styles.slide}>
                <WelcomeSlide />
            </View>
            <View style={styles.slide}>
                <LoginSlide />
            </View>
            <View style={styles.slide}>
                <DetailSlide />
            </View>
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
