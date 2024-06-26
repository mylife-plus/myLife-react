import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ListItemComponent from '../../components/SettingsComponents/SettingsMenu/ListItemComponent';
import { ListItem } from '../../components/SettingsComponents/SettingsMenu/ListItemType';
import styles from './style';
import { StatusBar } from 'react-native';

const listData: ListItem[] = [
    { key: 'spacer1', title: '', icon: null },
    { key: 'spacer1', title: '', icon: null },
    { key: 'spacer1', title: '', icon: null },
    { key: 'security', title: 'Security', icon: require('../../../assets/Settings-Icons/lockIcon.png') },
    { key: 'ui', title: 'UI', icon: require('../../../assets/Settings-Icons/UiIcon.png') },
    { key: 'data', title: 'Data', icon: require('../../../assets/Settings-Icons/dataIcon.png') },
    { key: 'spacer1', title: '', icon: null },
    { key: 'idea', title: 'Idea', icon: require('../../../assets/Settings-Icons/lightbulbIcon.png'), notifications: 3 },
    { key: 'problem', title: 'Problem', icon: require('../../../assets/Settings-Icons/problemIcon.png'), notifications: 3 },
    { key: 'spacer1', title: '', icon: null },
    { key: 'moos', title: 'MOOS', icon: require('../../../assets/Settings-Icons/moosIcon.png') },
];

const SettingsMenu: React.FC = () => {
  const navigation = useNavigation();

  const handlePress = (screen: string) => {
      navigation.navigate(screen as never);
  };

  return (
    <View style={styles.container}>
   
        <FlatList
        style={styles.transparentHolder}
            data={listData}
            renderItem={({ item }) => (
                <ListItemComponent
                    item={item}
                    onPress={() => handlePress(item.key)}
                />
            )}
            keyExtractor={(item) => item.key}
        />

    </View >
);
};

export default SettingsMenu;
