import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';
import Header from '../../components/MemoriesComponents/Header';
import Posts from '../../components/MemoriesComponents/PostsList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Memories: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <Header />
    <Posts/>
     
 
    </View>
    
  );
};

export default Memories;

