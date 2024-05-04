import React from 'react';
import { View, FlatList } from 'react-native';
import ListItemComponent from '../../components/SettingsComponents/SettingsMenu/ListItemComponent';
import { ListItem } from '../../components/SettingsComponents/SettingsMenu/ListItemType';
import styles from './style';

const listData: ListItem[] = [
  { key: 'security', title: 'Security', icon: require('../../../assets/Settings-Icons/lockIcon.png') },
  { key: 'ui', title: 'UI', icon: require('../../../assets/Settings-Icons/UiIcon.png') },
  { key: 'data', title: 'Data', icon: require('../../../assets/Settings-Icons/dataIcon.png') },
  { key: 'spacer1', title: '', icon: null },
  { key: 'memory', title: 'Memory', icon: require('../../../assets/Settings-Icons/memoryIcon.png') },
  { key: 'contact', title: 'Contact', icon: require('../../../assets/Settings-Icons/contactIcon.png') },
  { key: 'spacer1', title: '', icon: null },
  { key: 'idea', title: 'Idea', icon: require('../../../assets/Settings-Icons/lightbulbIcon.png'), notifications: 3 },
  { key: 'problem', title: 'Problem', icon: require('../../../assets/Settings-Icons/problemIcon.png'), notifications: 3 },
  { key: 'spacer1', title: '', icon: null },
  { key: 'moos', title: 'MOOS', icon: require('../../../assets/Settings-Icons/moosIcon.png') },
];

const SettingsMenu: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        renderItem={({ item }) => <ListItemComponent item={item} />}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default SettingsMenu;