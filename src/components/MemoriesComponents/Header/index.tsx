import React from 'react';
import { View, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

const Header: React.FC = () => {
    return (
        <View style={styles.header}>
            <SafeAreaView style={styles.elementsContainer}>
                {/* Search bar with icons */}
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF',  borderWidth: 1, borderColor: '#e0e0e0', paddingHorizontal: 12, height: 40, width : "100%" }}>
                    {/* Text input */}
                    {/* <Ionicons size={20} color="grey" name="search-outline"></Ionicons> */}
                    <Image source={require('../../../../assets/filter-icons/search.png')} />

                    <TextInput placeholder="  Search"  style={{ flex: 1 }} />
                    
                    {/* Icons container */}
                    <View style={{ flexDirection: 'row', width: 100 , justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.icon}>
                            {/* <Ionicons size={24} color="black" source={require('../../../../assets/filter-icons/filter.png')} /> */}
                            <Image source={require('../../../../assets/filter-icons/filter.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icon}>
                            {/* <Ionicons name="add" size={24} color="black" /> */}
                            <Image source={require('../../../../assets/filter-icons/add.png')} />

                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Header;
