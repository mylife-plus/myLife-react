import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const AddMemoryHeader: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <SafeAreaView style={styles.elementsContainer}>
                {/* Cancel icon on the left */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
                    <Image source={require('../../../../assets/Memory-icons/cancel.png')} />
                    {/* <Ionicons name="close" size={24} color="black" /> */}
                </TouchableOpacity>
                
                {/* Add Memory text in the middle */}
                <View style={styles.titleContainer}>
                <Text style={styles.title}><Image source={require('../../../../assets/Memory-icons/memory.png')}  style={{marginBottom : -7}}/> New Memory</Text>
               
                </View>
                
                {/* Done icon on the right */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
                    {/* <Ionicons name="checkmark" size={24} color="black" /> */}
                    <Image source={require('../../../../assets/Memory-icons/submit.png')} />

                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
};

export default AddMemoryHeader;
