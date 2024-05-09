
import styles from '../../../screens/SettingsMenu/style';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ListItem } from './ListItemType';

type Props = {
    item: ListItem;
    onPress?: () => void;
};

const ListItemComponent: React.FC<Props> = ({ item, onPress }) => {
    if (item.key.startsWith('spacer')) {
        return <View style={styles.spacer} />;
    }

    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.title}>{item.title}</Text>
            {item.notifications && (
                <View style={styles.notification}>
                    <Text style={styles.notificationText}>{item.notifications}</Text>
                </View>
            )}
            <Icon name="chevron-right" size={24} style={styles.arrow} />
        </TouchableOpacity>
    );
};

export default ListItemComponent;
