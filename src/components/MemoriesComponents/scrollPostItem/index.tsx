import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ScrollPostItemProps {
    date?: string;
    location?: string;
    taggedPeople?: string[];
    postContent: string;
    mediaType?: 'image' | 'audio' | 'video' | 'file';
    mediaUri?: string;
    tags?: string[];
}

const { height: screenHeight } = Dimensions.get('window');

const ScrollPostItem: React.FC<ScrollPostItemProps> = ({
    date,
    location,
    taggedPeople,
    postContent,
    mediaType,
    mediaUri,
    tags,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Text style={styles.date}>
                    <Image source={require('../../../../assets/Memory-icons/calendar.png')} style={styles.icon} />
                    {date}
                </Text>
                <Text style={styles.location}>
                    <Image source={require('../../../../assets/Memory-icons/location.png')} style={styles.icon} />
                    {location}
                </Text>
                <View style={styles.taggedCount}>
                    <Ionicons name="person" size={20} color="grey" />
                    <Text style={styles.taggedText}> {taggedPeople?.length}</Text>
                </View>
            </View>

            {/* Center content in the middle of the screen */}
            <View style={styles.content}>
                <Text>{postContent}</Text>
                {mediaType === 'image' && (
                    <Image source={{ uri: mediaUri }} style={styles.media} />
                )}
            </View>
            
            {/* Tags at the bottom */}
            <View style={styles.tags}>
                {tags?.map((tag, index) => (
                    <View key={index} style={styles.tagContainer}>
                        <Text style={styles.tagText}>{tag}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: screenHeight - screenHeight / 6.5, // Use full screen height
        padding: 16,
        justifyContent: 'space-between', // Keep elements evenly spaced in the container
    },
    banner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginBottom: 12,
    },
    date: {
        fontWeight: 'bold',
        marginRight: 8,
    },
    location: {
        color: 'grey',
        marginRight: 8,
    },
    icon: {
        width: 20,
        height: 20,
        marginBottom: -3,
    },
    taggedCount: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    taggedText: {
        color: 'grey',
    },
    content: {
        // flex: 1,
        justifyContent: 'center', // Center the content
    },
    media: {
        width: '100%',
        height: screenHeight / 2, // Adjust as needed for your design
        resizeMode: 'cover',
        marginBottom: 8,
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center', // Center the tags at the bottom
    },
    tagContainer: {
        marginRight: 8,
        marginBottom: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        elevation: 5,
    },
    tagText: {
        color: 'black',
    },
});

export default ScrollPostItem;
