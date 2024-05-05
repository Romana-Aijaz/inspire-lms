import {
    View, Text, StyleSheet, SafeAreaView, ScrollView, } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar, Badge } from '@rneui/themed';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { useState } from "react";
import { SearchBar } from '@rneui/themed';

export const Dashboard = () => {
    const [visible, setVisible] = useState(true);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#281483', '#8F6ED5', '#D782D9']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.header}
            >
                <View style={styles.subHeader}>
                    <View style={styles.iconLady}>
                        <Avatar
                            size={64}
                            rounded
                            source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
                            title="Bj"
                            containerStyle={{ backgroundColor: 'grey' }}
                        />
                        <Badge
                            status="success"
                            containerStyle={{ position: 'absolute', top: 33, left: 78 }}
                        />
                    </View>
                    <View style={styles.menu}>
                        <Provider>
                            <View
                                style={{
                                    paddingTop: 50,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                }}>
                                <Menu
                                    visible={visible}
                                    onDismiss={closeMenu}
                                    anchor={<Button onPress={openMenu}>Show menu</Button>}>
                                    <Menu.Item onPress={() => { }} title="Item 1" />
                                    <Menu.Item onPress={() => { }} title="Item 2" />
                                    <Divider />
                                    <Menu.Item onPress={() => { }} title="Item 3" />
                                </Menu>
                            </View>
                        </Provider>
                    </View>
                </View>
                <View style={styles.nameHeadingContainer}>
                    <Text style={styles.nameHeadingText}>Welcome back,</Text>
                    <Text style={styles.nameHeadingText}>Shakira!</Text>
                </View>
                <View style={styles.searchBarContainer}>
                    <SearchBar
                        inputContainerStyle={{
                            backgroundColor: 'white',
                        }}
                        containerStyle={{backgroundColor: 'white', 
                            width: '95%',
                            borderRadius: 10
                        }}
                        lightTheme={true}
                        round={true}
                        style={styles.searchBar}
                        placeholder="What skills are you looking for?"
                        onChangeText={updateSearch}
                        value={search}
                    />
                </View>
            </LinearGradient>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    header: {
        flex: 1,
        width: '100%',
        height: '45%',
        position: 'absolute',
        borderWidth: 5,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    subHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconLady: {
        backgroundColor: 'white',
        height: '55%',
        width: '30%',
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    menu: {
        borderWidth: 5,
        height: '35%',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameHeadingContainer: {
        top: -80,
        padding: 10,
    },
    nameHeadingText: {
        color: '#fff', // Button text color
        fontSize: 40,
        fontWeight: 'semi-bold',
    },
    searchBarContainer: {
        top: -70,
        alignItems: 'center'
    },
    searchBar: {
        backgroundColor: 'white'
    }
});