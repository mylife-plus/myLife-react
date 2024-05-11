import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import styles from '../../../screens/SettingsMenu/DataSettingsScreen/style';
interface SectionHeaderProps {
    icon: string;
    title: string;
}
const getImageSource = (iconPath: string): ImageSourcePropType => {
    switch (iconPath) {
        case 'memoryIcon':
            return require('../../../../assets/Settings-Icons/memoryIcon.png');
        case 'contactIcon':
            return require('../../../../assets/Settings-Icons/contactIcon.png');
        case 'dataIcon':
            return require('../../../../assets/Settings-Icons/dataIcon.png');
        default:
            return require('../../../../assets/Settings-Icons/dataIcon.png');
    }
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, title }) => (
    <View style={styles.sectionHeader}>
        <Image source={getImageSource(icon)} style={styles.headerIcon} />
        <Text style={styles.headerText}>{title}</Text>
    </View>
);

export default SectionHeader;