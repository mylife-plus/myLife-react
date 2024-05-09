import React from 'react';
import { View, Text, TouchableOpacity, Alert, Clipboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../../screens/SettingsMenu/SecuritySettingsScreen/style';

interface PublicKeyItemProps {
    publicKey: string;
}

const PublicKeyItem: React.FC<PublicKeyItemProps> = ({ publicKey }) => {
    const handleCopy = () => {
        Clipboard.setString(publicKey);
        Alert.alert('Copied', 'Public key copied to clipboard');
    };

    return (
        <View style={styles.item}>
            <Text style={styles.title}>public key</Text>
            <Text style={styles.subtitle}>{publicKey}</Text>
            <TouchableOpacity onPress={handleCopy}>
                <Icon name="content-copy" size={24} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

export default PublicKeyItem;
