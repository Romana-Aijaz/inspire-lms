import {
    View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image,  StatusBar
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar, Badge, ButtonGroup, SearchBar, Icon } from '@rneui/themed';
import { useState } from "react";
import Svg, {
    Use,
    Image as SvgImage, Circle, SvgUri
} from 'react-native-svg';

import TabMenu from "../components/TabMenu";
export const Dashboard = () => {
    const [search, setSearch] = useState("");
    const updateSearch = (search) => {
        setSearch(search);
    };
    const [selectedTab, setSelectedTab] = useState(0);
    const tabs = ['In progress', 'Explore', 'Incoming'];

    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };
    const cardsData = [
        { id: 1, title: "Adobe Illustrator", description: "Description for Card 1", image: "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/adobe.svg" },
        { id: 2, title: "Python", description: "Description for Card 2", image: "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/python.svg" },
        { id: 3, title: "Problem Solving", description: "Description for Card 2", image: "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/raleigh.svg" },
        { id: 4, title: "Time Management", description: "Description for Card 2", image: "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/dst.svg"},
        { id: 5, title: "Adobe Illustrator", description: "Description for Card 1", image: "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/adobe.svg" },
        { id: 6, title: "Python", description: "Description for Card 2", image: "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/python.svg" },
        { id: 7, title: "Problem Solving", description: "Description for Card 2", image: "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/raleigh.svg" },
        { id: 8, title: "Time Management", description: "Description for Card 2", image: "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/dst.svg" }
        // Add more cards as needed
    ];
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
                            source={{ uri: 'https://randomuser.me/api/portraits/women/90.jpg' }}
                            title="SK"
                            containerStyle={{ backgroundColor: 'grey' }}
                        />
                        <Badge
                            status="success"
                            containerStyle={{ position: 'absolute', top: 40, left: 78 }}
                        />
                    </View>
                    <View style={styles.menu}>
                        <TouchableOpacity>
                            <Icon name="menu" size={30} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.nameHeadingContainer}>
                    <Text style={styles.nameHeadingText}>Welcome back,</Text>
                    <Text style={styles.nameHeadingText}>Romana!</Text>
                </View>
                <View style={styles.searchBarContainer}>
                    <SearchBar
                        inputContainerStyle={{
                            backgroundColor: 'white',
                        }}
                        containerStyle={{
                            backgroundColor: 'white',
                            width: '95%',
                            borderRadius: 30
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
                <TabMenu tabs={tabs} selectedTab={selectedTab} onSelect={handleTabSelect} />
            <SafeAreaView style={styles.safeAreaViewContainer}>
            <ScrollView style={styles.cardsContainer}>
                {cardsData.map((card) => (
                    <TouchableOpacity key={card.id} style={styles.card}>
                        <View style={styles.cardIcon}>
                            {/* <Image source={require('../assets/adobe.png')} style={styles.iconImage} /> */}
                            <Svg width="80" height="80" viewBox="0 0 100 100" >
                                <SvgUri
                                    width="100%"
                                    height="100%"
                                    uri={card.image}
                                />
                            </Svg>
                        </View>
                        <View key={card.id} style={styles.cardTextContainer}>
                            <Text style={styles.cardTitle}>{card.title}</Text>
                            <Text style={styles.cardDescription}>{card.description}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
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
        height: '90%',
        width: '30%',
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        left: -10,
        top: -10
    },
    menu: {
        height: '35%',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        top: 30,
        left: 20
    },
    nameHeadingContainer: {
        top: -20,
        padding: 10,
    },
    nameHeadingText: {
        color: '#fff', // Button text color
        fontSize: 30,
    },
    searchBarContainer: {
        top: -10,
        alignItems: 'center'
    },
    searchBar: {
        backgroundColor: 'white'
    },
    cardsContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        elevation: 3, // for Android shadow
        shadowColor: 'black', // for iOS shadow
        shadowOffset: { width: 0, height: 2 }, // for iOS shadow
        shadowOpacity: 0.1, // for iOS shadow
        shadowRadius: 3, // for iOS shadow
    },
    cardIcon: {
        marginRight: 15,
    },
    cardTextContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 16,
        marginTop: 5,
    },
    iconImage: {
        width: 50, // Adjust width and height as needed
        height: 50,
        borderRadius: 10
    },
    safeAreaViewContainer: {
        flex: 1,
        position:'absolute',
        width: '100%',
        height: '50%',
        top: '50%'
    }
});