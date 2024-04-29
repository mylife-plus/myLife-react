import React from 'react';
import { View } from 'react-native';

import styles from './style';
import Header from '../../components/MemoriesComponents/Header';
import Posts from '../../components/MemoriesComponents/PostsList';
import { SafeAreaView } from 'react-native-safe-area-context';

const Memories: React.FC = () => {
  return (
    <View style={styles.container}>

      <Header />
     
 
    </View>
    
  );
};

export default Memories;
