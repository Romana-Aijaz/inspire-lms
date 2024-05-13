import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon, Avatar } from '@rneui/themed';

export const Profile = ({ navigation }) => {
    const handleLogout = () => {
       navigation.push('Login');
    };
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#281483', '#8F6ED5', '#D782D9']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.containerBackground}
            >
                <View style={styles.profileHeader}>
                    <Text style={styles.profileHeaderText}>My Profile</Text>
                    <Icon name="people" size={30} color={'white'} style={{ top: 50 }} />
                </View>
                <View style={styles.profileBody}>
                    <View style={styles.profileSubHeader}>
                        <View style={styles.circleContainer}>
                            <View style={[styles.circle, { backgroundColor: '#D782D9', top: 70, right: 15, width: 6, height: 6 }]} />
                            <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 70, right: 110, width: 6, height: 6 }]} />
                            <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 100, right: 48 }]} />
                            <View style={[styles.circle, { backgroundColor: '#D782D9', top: 40, right: 60 }]} />
                        </View>
                        <View style={styles.profilePicContainer}>
                            <Avatar
                                size={80}
                                rounded
                                source={{ uri: 'https://randomuser.me/api/portraits/women/90.jpg' }}
                                title="SK"
                                containerStyle={{ backgroundColor: 'grey' }}
                            />
                        </View>
                        <View style={styles.circleContainer}>
                            <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 70, left: 15, width: 6, height: 6 }]} />
                            <View style={[styles.circle, { backgroundColor: '#D782D9', top: 70, left: 110, width: 6, height: 6 }]} />
                            <View style={[styles.circle, { backgroundColor: '#D782D9', top: 100, left: 48 }]} />
                            <View style={[styles.circle, { backgroundColor: '#8F6ED5', top: 40, left: 60 }]} />
                        </View>
                    </View>
                    <View style={styles.profileNameContainer}>
                        <Text style={styles.profileName}>Romana Aijaz</Text>
                        <Text style={styles.profileEmail}>romanaaijaz99@gmail.com</Text>
                    </View>
                    <View style={styles.infoCardContainer}>
                        <View style={[styles.infoCard, styles.yellowCard]}>
                            <Text style={styles.infoHeading}>University</Text>
                            <Text style={styles.infoText}>California</Text>
                        </View>
                        <View style={[styles.infoCard, styles.purpleCard]}>
                            <Text style={styles.infoHeading}>Mobile Number</Text>
                            <Text style={styles.infoText}>77208135</Text>
                        </View>
                    </View>
                    <View style={styles.listCardContainer}>
                        <View style={styles.listCard}>
                            <View style={styles.listCardIconContainer}><Icon name="map" color={'#8F6ED5'} /></View>
                            <View style={styles.listCardTextContainer}><Text style={styles.listCardText}>Education Information</Text></View>
                            <View style={styles.listCardArrowContainer}><Icon name="arrow-right" size={30} /></View>
                        </View>
                        <View style={styles.listCard}>
                            <View style={[styles.listCardIconContainer, {backgroundColor: '#CCFFE5'}]}><Icon name="wallet" color={'#006633'} /></View>
                            <View style={styles.listCardTextContainer}><Text style={styles.listCardText}>Subscription Pack</Text></View>
                            <View style={styles.listCardArrowContainer}><Icon name="arrow-right" size={30} /></View>
                        </View>
                        <View style={styles.listCard}>
                            <View style={[styles.listCardIconContainer, { backgroundColor: '#CCE5FF' }]}><Icon name="credit-card" color={'#0080FF'} /></View>
                            <View style={styles.listCardTextContainer}><Text style={styles.listCardText}>Payment History</Text></View>
                            <View style={styles.listCardArrowContainer}><Icon name="arrow-right" size={30} /></View>
                        </View>
                        <TouchableOpacity onPress={handleLogout}>
                            <View style={[styles.listCard, { borderBottomWidth: 0 }]}>
                            <View style={[styles.listCardIconContainer, { backgroundColor: '#FFE5CC' }]}><Icon name="logout" color={'#FF8000'} /></View>
                            <View style={styles.listCardTextContainer}><Text style={styles.listCardText}>Logout</Text></View>
                            <View style={styles.listCardArrowContainer}><Icon name="arrow-right" size={30} /></View>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    containerBackground: {
        width: '100%',
        height: '100%'
    },
    profileHeader: {
        flexDirection: 'row',
        height: '20%',
        justifyContent: 'space-between',
        padding: 20
    },
    profileHeaderText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        top: 50
    },
    profileBody: {
        backgroundColor: 'white',
        height: '80%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 25,
        backgroundColor: '#D782D9', // Light purple color
        position: 'absolute',
    },
    profileSubHeader: {
        flexDirection: 'row',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePicContainer: {
        borderWidth: 4,
        borderRadius: 50,
        padding: 8,
        borderColor: 'gray'
    },
    circleContainer: {
        padding: 10,
        height: '90%'
    },
    profileNameContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        top: -25
    },
    profileName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    profileEmail: {
        color: 'gray'
    },
    infoCardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    infoCard: {
        width: '48%',
        aspectRatio: 2, // Aspect ratio 1:1 to maintain square shape
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        padding: 20
        // Add any other common styles here
    },
    yellowCard: {
        backgroundColor: '#ffd700',
    },
    purpleCard: {
        backgroundColor: '#8F6ED5',
    },
    infoHeading: {
        color: 'white'
    },
    infoText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        top: 5
    },
    listCardContainer: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -2, // Changed to negative value
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#fff',
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        top: 30
    },
    listCard: {
        backgroundColor: 'white',
        height: 50,
        marginBottom: 10,
        borderRadius: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingBottom: 15
    },
    listCardIconContainer: {
        backgroundColor: '#CCCCFF',
        borderRadius: 7,
        width: '12%',
        height: '150%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    listCardTextContainer: {
        width: '70%',
        alignItems: 'left'
    },
    listCardArrowContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    listCardText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});