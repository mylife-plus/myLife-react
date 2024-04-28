import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PostItemProps {
  date: string;
  location: string;
  taggedPeople: string[];
  postContent: string;
  mediaType: 'image' | 'audio' | 'video' | 'file';
  mediaUri: string;
  tags: string[];
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
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.location}>{location}</Text>
        <View style={styles.taggedPeople}>
          {taggedPeople.map((person, index) => (
            <Ionicons key={index} name="person-circle-outline" size={24} color="black" style={styles.tagIcon} />
          ))}
        </View>
        <Ionicons name="create-outline" size={24} color="black" style={styles.editIcon} />
      </View>
      <View style={styles.content}>
        <Text>{postContent}</Text>
        {mediaType === 'image' && <Image source={{ uri: mediaUri }} style={styles.media} />}
        {/* Add support for other media types like audio, video, files */}
      </View>
      <View style={styles.tags}>
        {tags.map((tag, index) => (
          <Text key={index} style={styles.tag}>{tag}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
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
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    marginRight: 8,
    marginBottom: 4,
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
});

export default PostItem;
