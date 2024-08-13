import React, { useEffect, useState } from 'react';
import { View, Text, WebView } from 'react-native';

const DisplayUnzippedFiles = ({ unzippedFiles }) => {
    const [htmlContent, setHtmlContent] = useState([]);

    useEffect(() => {
        const loadHtmlContent = async () => {
            const contentPromises = unzippedFiles.map(async file => {
                try {
                    const content = await fetch(file.fileUri);
                    const html = await content.text();
                    return { filename: file.filename, html };
                } catch (error) {
                    console.error('Error loading HTML content:', error);
                    return null;
                }
            });
            const loadedContent = await Promise.all(contentPromises);
            setHtmlContent(loadedContent.filter(item => item !== null));
        };

        loadHtmlContent();
    }, [unzippedFiles]);

    return (
        <View>
            <Text>HTML Files:</Text>
            {htmlContent.map((file, index) => (
                <View key={index}>
                    <Text>{file.filename}</Text>
                    <WebView originWhitelist={['*']} source={{ html: file.html }} style={{ height: 200 }} />
                </View>
            ))}
        </View>
    );
};

export default DisplayUnzippedFiles;

