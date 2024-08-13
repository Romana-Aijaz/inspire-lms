import { View, StyleSheet, Text, TouchableOpacity, TextInput, ActivityIndicator, Alert, Image, ScrollView, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import axios from 'axios';
import * as FileSystem from "expo-file-system";
import JSZip from 'jszip';
import RenderHtml from 'react-native-render-html';
import HTMLView from 'react-native-htmlview';
import { WebView } from 'react-native-webview';
import { XMLParser } from 'fast-xml-parser';

const getSCORMModuleDetails = async (courseId, token) => {
    try {
        const response = await axios.get(`https://lmsdemo.inspire.qa/webservice/rest/server.php`, {
            params: {
                wstoken: token,
                wsfunction: 'mod_scorm_get_scorms_by_courses',
                moodlewsrestformat: 'json',
                courseids: [courseId]
            }
        });

        const data = response.data;
        console.log('SCORM Module Details:', JSON.stringify(data, null, 2));
        return data;
    } catch (error) {
        console.error('Error fetching SCORM module details:', error);
    }
};

const downloadAndUnzipFile = async (url, token) => {
    try {
        const zipFilePath = `${FileSystem.documentDirectory}example.zip`;

        const downloadResumable = FileSystem.createDownloadResumable(`${url}?token=${token}`, zipFilePath);

        const { uri } = await downloadResumable.downloadAsync();
        console.log('Finished downloading to ', uri);

        const zipContent = await FileSystem.readAsStringAsync(uri, {
            encoding: FileSystem.EncodingType.Base64,
        });

        const zip = new JSZip();
        const unzipped = await zip.loadAsync(zipContent, { base64: true });

        const files = [];
        for (const filename of Object.keys(unzipped.files)) {
            const file = unzipped.files[filename];
            const content = await file.async('text');
            files.push({ filename, content });
        }
        return files;
    } catch (error) {
        console.error('Error downloading or unzipping the file:', error);
    }
};

const parseManifest = (manifestContent) => {
    const parser = new XMLParser();
    const manifest = parser.parse(manifestContent);

    if (!manifest || !manifest.manifest || !manifest.manifest.resources || !manifest.manifest.resources.resource) {
        console.error('Invalid manifest structure:', manifest);
        return null;
    }

    const resources = manifest.manifest.resources.resource;

    const resource = Array.isArray(resources) ? resources[0] : resources;

    if (!resource.file) {
        console.error('No files found in resource:', resource);
        return null;
    }

    const files = Array.isArray(resource.file) ? resource.file : [resource.file];

    const entryPointFile = files.find(file => file['@_href'] === 'imsmanifest.xml');

    if (!entryPointFile) {
        console.error('Entry point file (imsmanifest.xml) not found among files:', files);
        return null;
    }

    return entryPointFile.content;
};

export const CourseContents = () => { 
    const route = useRoute();
    const { courseId } = route.params;
    console.log(courseId)
    const authToken = useSelector(state => state.auth.authToken);
    const [loading, setLoading] = useState(true);
    const [entryPoint, setEntryPoint] = useState(null);
    const [htmlFiles, setHtmlFiles] = useState([]);

    const [xmlContent, setXmlContent] = useState('');

    const [htmlContent, setHtmlContent] = useState('');

    const [currentFileIndex, setCurrentFileIndex] = useState(0);

    useEffect(() => {
        const fetchAndUnzipScorm = async () => {
            try {
                const data = await getSCORMModuleDetails(courseId, authToken);
                if (data && data.scorms && data.scorms.length > 0) {
                    const zipUrl = data.scorms[0].packageurl;
                    const files = await downloadAndUnzipFile(zipUrl, authToken);
                    const targetFiles = ['index_lms_html5.html', 'index_lms.html', 'index_lms_flash.html'];
                    const loadedFiles = targetFiles.map(targetFile => {
                        const file = files.find(file => file.filename === targetFile);
                        return file ? file.content : '';
                    });
                    setHtmlFiles(loadedFiles);
                }
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch and unzip SCORM module.');
            } finally {
                setLoading(false);
            }
        };

        fetchAndUnzipScorm();
    }, [courseId, authToken]);
    const handleNextFile = () => {
        setCurrentFileIndex((currentFileIndex + 1) % htmlFiles.length);
    };

    return (
        <ScrollView contentContainerStyle={styles.contentsMainContainer}>
            <View style={styles.webviewContainer}>
                <Text>Course Contents</Text>
                {loading ? (
                    <Text>Loading...</Text>
                ) : (
                    <>
                        <WebView
                            originWhitelist={['*']}
                            source={{ html: htmlFiles[currentFileIndex] }}
                            style={styles.webview}
                        />
                        <Button title="Next File" onPress={handleNextFile} />
                    </>
                )}
            </View>
        </ScrollView>
) }

const styles = StyleSheet.create({
    contentsMainContainer: {
        borderWidth: 3,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    webviewContainer: {
        flex: 1,
        height: 600, // Adjust height as necessary
    },
    webview: {
        flex: 1,
    },
});
const tagsStyles = {
    body: {
        whiteSpace: 'normal',
        color: 'gray',
    },
};
const htmlStyles = StyleSheet.create({
    p: {
        color: 'gray',
    },
    a: {
        color: 'blue', // Example of how to style links
    },
});