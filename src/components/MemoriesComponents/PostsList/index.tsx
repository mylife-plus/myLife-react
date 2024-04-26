import React from 'react';
import { ScrollView } from 'react-native';
import PostItem from '../../MemoryPostItem';
import styles from './style';

const Posts: React.FC = () => {
  return (
    <ScrollView style={styles.postsContainer}>
      <PostItem
        date="April 15, 2024"
        location="New York"
        taggedPeople={['John Doe', 'Jane Smith']}
        postContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        mediaType="image"
        mediaUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheib5k7kBYG2fAbuABDJiCwP9Rghrij0wvkiQUq3R1A&s"
        tags={['#travel', '#friends']}
      />
      {/* Add more PostItem components here as needed */}
    </ScrollView>
  );
};

export default Posts;
