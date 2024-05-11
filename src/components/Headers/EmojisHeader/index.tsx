import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const EmojisHeader: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <SafeAreaView style={styles.elementsContainer}>
                {/* Go-back icon (chevron-back) on the left */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                
                {/* Emojis title in the middle */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}># Emojis</Text>
                </View>
                
                {/* Placeholder for balance on the right */}
                <View style={styles.icon}>
                    {/* Space for alignment */}
                </View>
            </SafeAreaView>
        </View>
    );
};

export default EmojisHeader;
