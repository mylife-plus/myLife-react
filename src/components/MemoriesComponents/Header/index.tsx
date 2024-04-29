import React from 'react';
import { View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

const Header: React.FC = () => {
    return (
        <View style={styles.header}>
            <SafeAreaView style={styles.elementsContainer}>
                {/* Search bar with icons */}
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', backgroundColor: 'white', borderRadius: 8, borderWidth: 1, borderColor: '#e0e0e0', paddingHorizontal: 12, height: 40, width : "100%" }}>
                    {/* Text input */}
                    <Ionicons size={20} color="grey" name="search-outline"></Ionicons>
                    <TextInput placeholder="Search" style={{ flex: 1 }} />
                    
                    {/* Icons container */}
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.icon}>
                            <Ionicons name="filter" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icon}>
                            <Ionicons name="add" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Header;
