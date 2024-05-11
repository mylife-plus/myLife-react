import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

interface PostItemProps {
    date?: string;
    location?: string;
    taggedPeople?: string[];
    postContent: string;
    mediaType?: 'image' | 'audio' | 'video' | 'file';
    mediaUri?: string;
    tags?: string[];
}

const PostItem: React.FC<PostItemProps> = ({
    date,
    location,
    taggedPeople,
    postContent,
    mediaType,
    mediaUri,
    tags,
}) => {
    const navigation = useNavigation()
    return (
        
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("scrollposts")} >
            <View style={styles.banner}>
              <View style={{alignItems : "center", justifyContent : "center"}}>
              <Text style={styles.date}> <Image source={require('../../../assets/Memory-icons/calendar.png')}  style={{marginBottom : -3}}/> {date}</Text>
                
              </View>
              <View>
                <Text style={styles.location}> <Image source={require('../../../assets/Memory-icons/location.png')}  style={{marginBottom : -3}}/> {location}</Text>
               </View>
                {/* <View style={styles.taggedPeople}>
                    {taggedPeople.map((person, index) => (
                        <Ionicons key={index} name="person-circle-outline" size={24} color="black" style={styles.tagIcon} />
                    ))}
                </View> */}
                {/* <Ionicons name="create-outline" size={24} color="black" style={styles.editIcon} /> */}
                <View style={styles.editIcon}>
                <Text  style={{ fontSize: 18,
        color: 'grey',
        fontFamily: 'Helvetica'}}> <Image source={require('../../../assets/Memory-icons/user.png')}  style={{ width : 20, height : 20}}/> {taggedPeople?.length}</Text>
               </View>
            </View>
            <View style={styles.content}>
                <Text>{postContent}</Text>
                {mediaType === 'image' && <Image source={{ uri: mediaUri }} style={styles.media} />}
                {/* Add support for other media types like audio, video, files */}
            </View>
            <View style={styles.tags}>
                {tags.map((tag, index) => (
                    <View key={index} style={styles.tagContainer}>
                        <Text style={styles.tagText}>{tag}</Text>
                    </View>
                ))}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        padding: 16,
    },
    banner: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    date: {
        marginRight: 8,
        fontWeight: 'bold',
    },
    location: {
        marginRight: 8,
        color: 'grey',
    },
    taggedPeople: {
        flexDirection: 'row',
        marginRight: 8,
    },
    tagIcon: {
        marginRight: 4,
    },
    editIcon: {
        marginLeft: 'auto',
       
    },
    content: {
        marginBottom: 12,
    },
    media: {
        width: '109.5%',
        marginLeft: -17,
        height: 200,
        resizeMode: 'cover',
        // borderRadius: 8,
        marginBottom: 8,
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
    },
    tagContainer: {
        marginRight: 8,
        marginBottom: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: 'white', // You can adjust the background color if necessary
        borderRadius: 8, // Maintain a reasonable border radius
        // Define shadow properties
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 5, // Adjust shadow radius
        shadowOffset: {
            width: 0,
            height: 3, // Adjust shadow height
        },
        elevation: 5, // Add elevation for Android
    },
    tagText: {
        color: 'white', // Adjust the text color if needed
    },
});

export default PostItem;
