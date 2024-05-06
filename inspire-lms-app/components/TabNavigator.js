import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WelcomeSlide } from './WelcomeSlide';
import { Courses } from './Courses';
import { Dashboard } from '../pages/dashboard';
import { Icon } from '@rneui/themed';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false }}>
            <Tab.Screen name="Home" component={Dashboard} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" size={30} color={'gray'} />
                ),
                tabBarLabelStyle: {
                    fontWeight: 'bold',
                    color: '#281483'
                },
            }} />
            
            <Tab.Screen name="Profile" component={Courses} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="people" size={30} color={'gray'} />
                ),
                tabBarLabelStyle: {
                    fontWeight: 'bold',
                    color: '#281483'
                },
            }} />
        </Tab.Navigator>
    );
};

export default TabNavigator;