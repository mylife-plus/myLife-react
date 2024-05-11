import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../../screens/SettingsMenu/DataSettingsScreen/style';

interface ActionItemProps {
    title: string;
    onPressMessage: string;
}

const ActionItem: React.FC<ActionItemProps> = ({ title, onPressMessage }) => (
    <TouchableOpacity style={styles.item} onPress={() => Alert.alert(onPressMessage)}>
        <Text style={styles.title}>{title}</Text>
        <Icon name="chevron-right" size={24} />
    </TouchableOpacity>
);

export default ActionItem;
