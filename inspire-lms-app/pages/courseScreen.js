import { View, StyleSheet, Text, TouchableOpacity, TextInput, Alert, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import axios from 'axios';

const stripHtmlTags = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
};

const getCourseContents = async (courseId, TOKEN) => {
    try {
        const response = await axios.get(`https://lmsdemo.inspire.qa/webservice/rest/server.php`, {
            params: {
                wstoken: TOKEN,
                wsfunction: 'core_course_get_contents',
                moodlewsrestformat: 'json',
                courseid: courseId
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching course contents:', error);
        return [];
    }
};

export const CourseScreen = () => {
    const route = useRoute();
    const authToken = useSelector(state => state.auth.authToken);
    const [courseContents, setCourseContents] = useState([]);

    const { course } = route.params;

    useEffect(() => {
        const fetchCourseContents = async () => {
            const contents = await getCourseContents(course.id, authToken);
            setCourseContents(contents);
        };

        fetchCourseContents();
    }, [course.id]);

    console.log(courseContents)
    console.log(course)

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.courseMainContainer}>
            <View style={styles.courseHeadingContainer}><Text style={styles.courseHeading}>{course.categoryname ? course.categoryname : 'category'}</Text></View>
            <View style={styles.courseImageContainer}>
                <Image source={{ uri: course.overviewfiles[0].fileurl + '?token=' + authToken }}
                    style={styles.courseImage}
                    resizeMode="cover" 
                />
            </View>
            <View style={styles.courseDetailsContainer}>
                <View style={styles.courseTitleContainer}>
                    <Text style={styles.courseTitle}>{course.fullname ? course.fullname : 'Course Name'}</Text>
                    <Text style={styles.coursePrice}>$300</Text>
                </View>
                <Text style={styles.courseDescription}>{course.summary ? stripHtmlTags(course.summary) : 'Summary of the course'}</Text>
            </View>
                <View style={styles.courseContentsContainer}>
                    {courseContents.map((content, index) => (
                        <View key={index} style={styles.courseContent}>
                            <Text style={styles.courseContentTitle}>{content.name}</Text>
                            {content.modules.map((module, modIndex) => (
                                <TouchableOpacity key={modIndex} style={styles.moduleContainer}>
                                    <Text style={styles.moduleTitle}>{module.name}</Text>
                                    <Image source={{ uri: 'https://lmsdemo.inspire.qa/theme/image.php/edumy/scorm/1703058046/icon?token=eb602c793c134ef97610bb60d3559898' }} resizeMode="cover" />
                                    {console.log(module.modicon)}
                                </TouchableOpacity>
                               
                            ))}
                        </View>
                    ))}
                </View>
            <View style={styles.ratingContainer}>
                <Rating
                    showRating
                    onFinishRating={(rating) => console.log('Rating is: ' + rating)}
                    style={{ paddingVertical: 10 }}
                />
            </View>
                <Image source={{ uri: 'https://lmsdemo.inspire.qa/webservice/theme/image.php/edumy/scorm/1703058046/icon?token=eb602c793c134ef97610bb60d3559898' }} resizeMode="cover" />
            <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    courseMainContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    courseDetailsContainer: {
        marginTop: 20,
    },
    courseDescription: {
        fontSize: 16,
        color: '#333',
        padding: 8
    },
    courseImageContainer: {
        width: '100%',
        height: 400,
        borderRadius: 10,
    },
    courseImage: {
        width: '100%', // Adjust width and height as needed
        height: '100%',
        borderRadius: 10
    },
    image: {
        width: 300,
        height: 200,
    },
    courseHeadingContainer: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    courseHeading: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    courseTitleContainer: {
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    courseTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        flexShrink: 1,
        flexGrow: 1,
    },
    coursePrice: {
        fontSize: 18,
        fontWeight: 'bold',
        flexShrink: 0
    },
    addToCartButton: {
        backgroundColor: '#000',
        padding: 15,
        margin: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    addToCartButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    courseContentsContainer: {
        marginTop: 20,
        padding: 8,
    },
    courseContent: {
        marginBottom: 15,
    },
    courseContentTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    moduleContainer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
    },
    moduleTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});