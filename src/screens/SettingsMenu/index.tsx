import React from 'react';
import { View, Text, SectionList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

interface ListItem {
  key: string;
  title: string;
  icon: any;
  subtitle?: string;
}

interface Section {
  title: string;
  data: ListItem[];
}

const sections: Section[] = [
  {
    title: 'General',
    data: [
      { key: '1', title: 'Language (english)', icon: require('../../../assets/Settings-Icons/langIcon.png') },
      { key: '2', title: 'Security', icon: require('../../../assets/Settings-Icons/lockIcon.png') },
      { key: '3', title: 'UI', icon: require('../../../assets/Settings-Icons/UiIcon.png') },
      { key: '4', title: 'Data', icon: require('../../../assets/Settings-Icons/dataIcon.png') },
    ],
  },
  {
    title: 'Apps',
    data: [
      { key: '5', title: 'Memory', icon: require('../../../assets/Settings-Icons/memoryIcon.png') },
      { key: '6', title: 'Cash', icon: require('../../../assets/Settings-Icons/cashIcon.png') },
      { key: '7', title: 'Investment', icon: require('../../../assets/Settings-Icons/investIcon.png') },
      { key: '8', title: 'Contact', icon: require('../../../assets/Settings-Icons/contactIcon.png') },
    ],
  },
];

const SettingsMenu: React.FC = () => {
  const navigation = useNavigation();

  const handleItemPress = (item: ListItem) => {
    if (item.key === '6') {
      navigation.navigate('Cashflow');
    }
    if (item.key === '5') {
      navigation.navigate('Memory');
    }
  };

  const renderItem = ({ item, section }: { item: ListItem, section: Section }) => (
    <TouchableOpacity
      style={[
        styles.item,
        section.data[section.data.length - 1].key === item.key && styles.lastItemInSection,
      ]}
      onPress={() => handleItemPress(item)}
    >
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.title}>{item.title}</Text>
      <Icon name="keyboard-arrow-right" size={24} style={styles.arrow} />
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section }: { section: Section }) => (
    <Text style={styles.header}>{section.title}</Text>
  );

  const renderSectionFooter = ({ section }: { section: Section }) => (
    section.title === 'General' ? <View style={styles.sectionSpacer} /> : null
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        renderSectionFooter={renderSectionFooter}
      />
    </View>
  );
};

export default SettingsMenu;
