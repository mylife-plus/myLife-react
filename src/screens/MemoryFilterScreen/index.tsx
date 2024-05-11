import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, SafeAreaView, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Slider from '@react-native-community/slider';
import FilterMemoryHeader from '../../components/Headers/FilterMemoryHeader';
import FilterMemory from '../../components/MemoriesComponents/FilterMemory';

const FilterMemoryScreen = () => {
  const [fromDate, setFromDate] = useState<Date>(new Date(2012, 11, 12));
  const [toDate, setToDate] = useState<Date>(new Date(2022, 11, 24));
  const [location, setLocation] = useState<string>('Germany');
  const [radius, setRadius] = useState<number>(20);
  const [categories, setCategories] = useState<string[]>(['Null', 'Null']);

  return (
   <View style={styles.container}>
<FilterMemoryHeader/>
<FilterMemory/>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});

export default FilterMemoryScreen;
