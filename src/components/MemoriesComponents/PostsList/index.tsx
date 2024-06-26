import React from 'react';
import { ScrollView } from 'react-native';
import PostItem from '../../MemoryPostItem';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const Posts: React.FC = () => {
    const navigation = useNavigation();
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

    // Render the posts using a map function
    return (
        <ScrollView style={styles.postsContainer} >
            {postData.map((post, index) => (
                <PostItem
                    key={index}
                    date={post.date}
                    location={post.location}
                    taggedPeople={post.taggedPeople}
                    postContent={post.postContent}
                    mediaType={post.mediaType}
                    mediaUri={post.mediaUri}
                    tags={post.tags}
                />
            ))}
        </ScrollView>
    );
};

export default Posts;
