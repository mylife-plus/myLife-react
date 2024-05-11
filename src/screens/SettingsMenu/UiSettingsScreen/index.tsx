import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import ActionableItem from '../../../components/SettingsComponents/ActionableItem';
import CustomSwitch from '../../../components/SettingsComponents/CustomSwitch';
import styles from './style';

const UiSettingsScreen: React.FC = () => {
    const [leftHandEnabled, setLeftHandEnabled] = useState(false);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

    return (
        <View style={styles.container}>
            <ActionableItem title="Language (english)" onPress={() => Alert.alert('Change Language is under development')} />
            <View style={styles.item}>
                <Text style={styles.title}>dark mode</Text>
                <CustomSwitch value={darkModeEnabled} onValueChange={setDarkModeEnabled} />
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>left hand</Text>
                <CustomSwitch value={leftHandEnabled} onValueChange={setLeftHandEnabled} />
            </View>
            <ActionableItem title="Font (Kumbh Sans)" onPress={() => Alert.alert('Change Font is under development')} />
            <ActionableItem title="Background Color" onPress={() => Alert.alert('Change Background Color is under development')} />
        </View>
    );
};

export default UiSettingsScreen;
