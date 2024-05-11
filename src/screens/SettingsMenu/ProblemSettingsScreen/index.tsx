import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './style';

interface Problem {
    id: string;
    text: string;
    user: string;
    userImage: string;
    likes: number;
    time: string;
    comments: number;
}

const ProblemScreen: React.FC = () => {
    const [problems, setProblems] = useState<Problem[]>([
        { id: '1', text: 'New Problem!!', user: 'Susi Mupi', userImage: '../../../../assets/avatarTest.png', likes: 0, time: '46 min ago', comments: 0 },
    ]);

    const addNewProblem = () => {
        const newProblem: Problem = {
            id: (Math.max(...problems.map(i => parseInt(i.id))) + 1).toString(),
            text: 'Sample new problem content',
            user: 'New User',
            userImage: '../../../../assets/avatarTest.png',
            likes: 0,
            time: 'just now',
            comments: 0
        };
        setProblems([newProblem, ...problems]);
    };

    const renderItem = ({ item }: { item: Problem }) => (
        <View style={styles.postContainer}>
            <View style={styles.postTextBackground}>
            <Text style={styles.postText}>{item.text}</Text>
            </View>
            <View style={styles.postFooter}>
                <View style={styles.userDetails}>
                    <View style={styles.userAndInteraction}>
                    {/* <Image source={{ uri: item.userImage }} style={styles.avatar} /> */}
                    <Image source={require('../../../../assets/avatarTest.png')} style={styles.avatar}/> 
                        <Text style={styles.userName}>{item.user}</Text>
                        <TouchableOpacity>
                            <Ionicons name="chevron-up-outline" size={24} color="#666" />
                        </TouchableOpacity>
                        <Text style={styles.interactionText}>{item.likes}</Text>
                        <TouchableOpacity>
                            <Ionicons name="chevron-down-outline" size={24} color="#666" />
                        </TouchableOpacity>
                        <Text style={styles.time}>{item.time}</Text>
                    </View>
                    <View style={styles.toTheLeft}>
                    <TouchableOpacity>
                        <View style={styles.commentDetails}>
                            <Text style={styles.interactionText}>{item.comments}</Text>
                            <Ionicons name="chatbubble-ellipses-outline" size={16} color="#666" />  
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
    
    
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="search" size={20} style={styles.icon} />
                <TextInput placeholder="Search" style={styles.searchInput} />
                <TouchableOpacity>
                    <Ionicons name="person-outline" size={24} color="#666" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="filter-list" size={24} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={addNewProblem}>
                <Ionicons name="add-outline" size={30} color="#666" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={problems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default ProblemScreen;
