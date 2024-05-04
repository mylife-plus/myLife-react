import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface MenuItem {
  id: number;
  title: string;
  image: any; // You can adjust the type of the image as needed
  action?: () => void; // Add the action property to the MenuItem interface
}

interface Props {
  item: MenuItem;
}

const CardMenuItem: React.FC<Props> = ({ item }) => {
  const handlePress = () => {
    if (item.action) {
      item.action(); // Call the action function if it's provided
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Text style={styles.description}>{item.description}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default CardMenuItem;
