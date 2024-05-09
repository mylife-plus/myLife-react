import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Clipboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

const CustomSwitch: React.FC<{ value: boolean; onValueChange: (value: boolean) => void }> = ({ value, onValueChange }) => {
    return (
        <TouchableOpacity
            style={[
                styles.customSwitch,
                value ? styles.switchOn : styles.switchOff,
            ]}
            onPress={() => onValueChange(!value)}
        >
            <Text style={styles.switchLabel}>{value ? 'on' : 'off'}</Text>
            <View style={[styles.switchSlider, value ? styles.switchSliderRight : styles.switchSliderLeft]} />
        </TouchableOpacity>
    );
};

const SecuritySettingsScreen: React.FC = () => {
    const [encryptEnabled, setEncryptEnabled] = useState(true);
    const [keyStoreEnabled, setKeyStoreEnabled] = useState(false);
    const [pinEnabled, setPinEnabled] = useState(true);
    const navigation = useNavigation();

    const handleCopy = () => {
        const publicKey = '0x998....fsd98';
        Clipboard.setString(publicKey);
        Alert.alert('Copied', 'Public key copied to clipboard');
    };

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.title}>encrypt myLife</Text>
                <CustomSwitch value={encryptEnabled} onValueChange={setEncryptEnabled} />
            </View>

            <View style={styles.spacer} />

            <View style={styles.item}>
                <Text style={styles.title}>public key</Text>
                <Text style={styles.subtitle}>0x998....fsd98</Text>
                <TouchableOpacity onPress={handleCopy}>
                    <Icon name="content-copy" size={24} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.item} onPress={() => Alert.alert('Backup private key')}>
                <Text style={styles.title}>backup private key</Text>
                <Icon name="chevron-right" size={24} style={styles.icon} />
            </TouchableOpacity>

            <Text style={styles.warning}>loose this key = loose access to app data</Text>

            <View style={styles.itemDisabled}>
                <Text style={styles.titleDisabled}>store key in key-store</Text>
                <CustomSwitch value={keyStoreEnabled} onValueChange={setKeyStoreEnabled} />
            </View>

            <Text style={styles.subtitleDisabled}>
                store the private key in the key-store to automatically enter the private key
            </Text>

            <View style={styles.item}>
                <Text style={styles.title}>activate phone pin</Text>
                <CustomSwitch value={pinEnabled} onValueChange={setPinEnabled} />
            </View>

            <Text style={styles.warning}>the private key overrides the pin</Text>
        </View>
    );
};

export default SecuritySettingsScreen;
