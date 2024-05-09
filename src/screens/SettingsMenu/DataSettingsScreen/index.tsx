import React from 'react';
import { View } from 'react-native';
import SectionHeader from '../../../components/SettingsComponents/DataSettings/SectionHeader';
import ActionItem from '../../../components/SettingsComponents/DataSettings/ActionItem';
import EraseDataItem from '../../../components/SettingsComponents/DataSettings/EraseDataItem';
import styles from './style';

const DataSettingsScreen: React.FC = () => {
    return (
        <View style={[styles.screenBackground, styles.container]}>
            <View style={styles.spacerScreen}/>
            <SectionHeader icon="memoryIcon" title="Memory" />
            <ActionItem title="upload GPS Points" onPressMessage="Upload GPS Points" />
            <ActionItem title="upload Media with GPS" onPressMessage="Upload Media with GPS" />
            <View style={styles.spacer}/>
            <SectionHeader icon="contactIcon" title="Contact" />
            <ActionItem title="upload Contacts" onPressMessage="Upload Contacts" />
            <View style={styles.spacer}/>
            <SectionHeader icon="dataIcon" title="All Data" />
            <ActionItem title="download myLife data" onPressMessage="Download myLife data" />
            <ActionItem title="upload myLife data" onPressMessage="Upload myLife data" />
            <EraseDataItem onPressMessage="erase All Data" />
        </View>
    );
};
export default DataSettingsScreen;
