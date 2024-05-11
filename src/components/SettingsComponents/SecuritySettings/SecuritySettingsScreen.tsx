import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PublicKeyItem from './PublicKeyItem';
import ActionableItem from '../ActionableItem';
import styles from '../../../screens/SettingsMenu/SecuritySettingsScreen/style';
import CustomSwitch from '../CustomSwitch';

const SecuritySettingsScreen: React.FC = () => {
    const [encryptEnabled, setEncryptEnabled] = useState(true);
    const [keyStoreEnabled, setKeyStoreEnabled] = useState(false);
    const [pinEnabled, setPinEnabled] = useState(true);
    const navigation = useNavigation();
    const publicKey = '0x998....fsd98';

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.title}>encrypt myLife</Text>
                <CustomSwitch value={encryptEnabled} onValueChange={setEncryptEnabled} />
            </View>

            <View style={styles.spacer} />
            <PublicKeyItem publicKey={publicKey} />
            <ActionableItem title="backup private key" onPress={() => Alert.alert('Backup private key')} />

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
