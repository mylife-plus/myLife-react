import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <TextInput placeholder="Search" style={styles.searchInput} />
      <TouchableOpacity>
        <Ionicons name="md-add" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="md-options" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
