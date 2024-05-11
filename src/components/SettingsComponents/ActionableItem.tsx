import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../screens/SettingsMenu/SecuritySettingsScreen/style';

interface ActionableItemProps {
    title: string;
    onPress: () => void;
}

const ActionableItem: React.FC<ActionableItemProps> = ({ title, onPress }) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Icon name="chevron-right" size={24} style={styles.icon} />
    </TouchableOpacity>
);

export default ActionableItem;
