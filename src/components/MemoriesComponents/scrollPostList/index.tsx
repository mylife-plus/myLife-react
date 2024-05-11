import React from 'react';
import { FlatList, StyleSheet, Dimensions } from 'react-native';
import PostItem from '../../MemoryPostItem';
import ScrollPostItem from '../scrollPostItem';

const screenHeight = Dimensions.get('window').height;

const ScrollPosts: React.FC = () => {
    // Define an array of post data with unique content for each post
    const postData = [
        {
            date: '24.12.2022 15:42',
            location: 'New York',
            taggedPeople: ['John Doe', 'Jane Smith'],
            postContent: 'Just had the most amazing day in Central Park! It was sunny and the flowers were in full bloom. 🌸',
            mediaType: 'image',
            mediaUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheib5k7kBYG2fAbuABDJiCwP9Rghrij0wvkiQUq3R1A&s',
            tags: ['🌸', '☀️']
        },
        {
            date: '25.12.2022 18:30',
            location: 'Paris',
            taggedPeople: ['Alice White', 'Bob Johnson'],
            postContent: 'Enjoying a lovely dinner with friends at a cozy French bistro. The food is amazing! 🥖🍷',
            mediaType: 'image',
            mediaUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxiGVFKekroBRBtwNidSM-QM9XtRZnuGrEU2qeZtZHA&s',
            tags: ['🍷', '🍽️']
        },
        {
            date: '26.12.2022 09:15',
            location: 'Tokyo',
            taggedPeople: ['Chris Lee', 'Emily Zhang'],
            postContent: 'Exploring the bustling streets of Tokyo! The city is so vibrant and full of life. 🇯🇵',
            mediaType: 'image',
            mediaUri: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iepg9xCiifZA/v1/-1x-1.jpg',
            tags: ['🇯🇵', '🏙️']
        },
        {
            date: '27.12.2022 20:00',
            location: 'San Francisco',
            taggedPeople: ['David Green', 'Sophia Turner'],
            postContent: 'Watching the sunset over the Golden Gate Bridge. Such a beautiful sight! 🌉',
            mediaType: 'image',
            mediaUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrtP8TuXKLdOJ2rE1wD37SUzmrESHxCPSPoZavfA7DA&s',
            tags: ['🌉', '🌅']
        }
    ];

    // Render the posts using FlatList with vertical scrolling and pagination
    return (
        <FlatList
            data={postData}
            renderItem={({ item }) => (
                <ScrollPostItem
                    date={item.date}
                    location={item.location}
                    taggedPeople={item.taggedPeople}
                    postContent={item.postContent}
                    mediaType={item.mediaType}
                    mediaUri={item.mediaUri}
                    tags={item.tags}
                />
            )}
            keyExtractor={(item, index) => index.toString()}
            pagingEnabled={true}
            horizontal={false}
            showsVerticalScrollIndicator={true}
            style={styles.flatList}
        />
    );
};

const styles = StyleSheet.create({
    flatList: {
        flex: 1, // Use flex: 1 to take up the whole screen
        height: "80%" ,
    },
});

export default ScrollPosts;
