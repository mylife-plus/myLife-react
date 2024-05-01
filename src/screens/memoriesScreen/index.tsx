import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';
import Header from '../../components/MemoriesComponents/Header';
import Posts from '../../components/MemoriesComponents/PostsList';
import { SafeAreaView } from 'react-native-safe-area-context';

const Memories: React.FC = () => {
  return (
    <View style={styles.container}>

      <Header />
      <Text style={{ textAlign: 'center', padding: 16 }}>
        The screen you're seeing now is still under development. That's why you're seeing this text.
        Once development is complete, the memory posts will appear here. Until then, please don't give it much importance.
      </Text>
     
 
    </View>
    
  );
};

export default Memories;
