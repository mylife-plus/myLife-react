import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../../screens/SettingsMenu/DataSettingsScreen/style';

interface EraseDataItemProps {
    onPressMessage: string;
}

const EraseDataItem: React.FC<EraseDataItemProps> = ({ onPressMessage }) => (
    <TouchableOpacity style={styles.itemErase} onPress={() => 
        Alert.alert("Erase All Data", "Are you sure you want to erase all data?", [
            { text: "Cancel", style: "cancel" },
            { text: "Erase", style: "destructive" }
        ])
    }>
        <Text style={styles.titleErase}>erase all data</Text>
        <Icon name="chevron-right" size={24} style={styles.redArrow}/>
    </TouchableOpacity>
);

export default EraseDataItem;
