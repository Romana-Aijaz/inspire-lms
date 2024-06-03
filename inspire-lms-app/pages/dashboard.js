import {
    View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, StatusBar
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar, Badge, ButtonGroup, SearchBar, Icon } from '@rneui/themed';
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { setCoursesEnrolled } from '../redux/reducers';
import TabMenu from "../components/TabMenu";
import { useDispatch } from 'react-redux';
import axios from 'axios';


const getCoursesByField = async (field, value, token) => {
    try {
        const response = await axios.get(`https://lmsdemo.inspire.qa/webservice/rest/server.php`, {
            params: {
                wstoken: token,
                wsfunction: 'core_course_get_courses_by_field',
                moodlewsrestformat: 'json',
                field: field,
                value: value
            }
        });
        return response.data.courses;
    } catch (error) {
        console.error('Error fetching courses by field:', error);
        return [];
    }
};

async function getUserCourses(token, classification) {
    try {
        const response = await axios.get('https://lmsdemo.inspire.qa/webservice/rest/server.php', {
            params: {
                wstoken: token,
                wsfunction: 'core_course_get_enrolled_courses_by_timeline_classification',
                moodlewsrestformat: 'json',
                classification: classification
            }
        });
        const courses = response.data.courses;
        return courses;
    } catch (error) {
        console.error('Failed to get user courses:', error);
        return [];
    }
}

export const Dashboard = ({ navigation }) => {
    const fullName = useSelector(state => state.auth.fullName);
    const enrolledCourses = useSelector(state => state.auth.coursesEnrolled);
    const authToken = useSelector(state => state.auth.authToken);
    const id = useSelector(state => state.auth.id);
    const [fetchedCourses, setFetchedCourses] = useState([]);
    console.log(authToken)
    console.log(id)
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchCourses = async () => {
            if (authToken) {
                const courses = await getUserCourses(authToken, 'inprogress');
                if (courses) {

                    // Fetch detailed courses by ID
                    const fetchedCourses = await Promise.all(
                        courses.map(course => getCoursesByField('id', course.id, authToken))
                    );
                    setFetchedCourses(fetchedCourses.flat()); // Flatten the array of arrays
                    const flattenedCourses = fetchedCourses.flat(); // Flatten the array of arrays
                    dispatch(setCoursesEnrolled(flattenedCourses));
                }
            }
        };

        fetchCourses();
    }, [authToken, id, dispatch]);
console.log(fetchedCourses)
    const [search, setSearch] = useState("");
    const updateSearch = (search) => {
        setSearch(search);
    };
    const [selectedTab, setSelectedTab] = useState(0);
    const tabs = ['In progress', 'Explore', 'Incoming'];

    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };

    const handleCoursePress = (course) => {
        navigation.navigate('Course', { course });
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
                            source={{ uri: 'https://randomuser.me/api/portraits/women/90.jpg' }}
                            title="SK"
                            containerStyle={{ backgroundColor: 'grey' }}
                        />
                        <Badge
                            status="success"
                            containerStyle={{ position: 'absolute', top: 45, left: 72 }}
                        />
                    </View>
                    <View style={styles.menu}>
                        <TouchableOpacity>
                            <Icon name="menu" size={30} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.nameHeadingContainer}>
                    <Text style={styles.nameHeadingText}>Welcome back,</Text>
                    <Text style={styles.nameHeadingText}>{fullName ? fullName : ''}</Text>
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
                    {enrolledCourses.length > 0 ? (
                        enrolledCourses.map((course) => (
                            <TouchableOpacity key={course.id} style={styles.card} onPress={() => handleCoursePress(course)}>
                                <View style={styles.cardIcon}>
                                    <Image source={{ uri: course.overviewfiles[0].fileurl +'?token='+authToken }}
                                        style={styles.iconImage} resizeMode="cover" />
                                </View>
                                <View style={styles.cardTextContainer}>
                                    <Text style={styles.cardTitle}>{course.shortname}</Text>
                                    <Text style={styles.cardDescription}>{course.fullname}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    ) : (<View style={styles.noCoursesText}>
                        <Text style={styles.noCoursesText}>No courses enrolled</Text>
                    </View>)}
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
        height: '80%',
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
        width: 60, // Adjust width and height as needed
        height: 60,
        borderRadius: 10
    },
    safeAreaViewContainer: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '50%',
        top: '50%'
    },
    noCoursesText: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: 'center'
    }
});