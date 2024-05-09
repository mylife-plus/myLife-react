import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../../screens/SettingsMenu/SecuritySettingsScreen/style';

interface CustomSwitchProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ value, onValueChange }) => (
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

export default CustomSwitch;
