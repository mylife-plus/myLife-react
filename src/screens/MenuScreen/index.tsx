import React from 'react';
import { View, FlatList, SafeAreaView, StatusBar } from 'react-native';
import CardMenuItem from '../../components/CardMenuItem';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import { useNavigation } from '@react-navigation/native';
import { useAppState } from '../../state/App/AppSelectors';

const MenuScreen: React.FC = () => {
  const navigation = useNavigation();
  const { appConfig, setAppState } = useAppState();

const  handlePress = (screen : string) => {
  if (screen === 'Home') {
    setAppState('Home')

  }

}
  const data = [
    { id: 1, title: 'MyLife', image: require('../../../assets/Menu-Icons/smiling-face.png'), action: () => {handlePress('Home')} },
    { id: 2, title: 'Travel', image: require('../../../assets/Menu-Icons/sunrise-over-mountains.png'), action: () => { } },
    { id: 3, title: 'MyFarm', image: require('../../../assets/Menu-Icons/farmer.png'), action: () => { } },
    { id: 4, title: 'MyHealth', image: require('../../../assets/Menu-Icons/red-heart.png'), action: () => { } },
    { id: 5, title: 'MyFinance', image: require('../../../assets/Menu-Icons/chart-increasing.png'), action: () => { } },
    { id: 6, title: 'MyStartup', image: require('../../../assets/Menu-Icons/rocket.png'), action: () => { } },
    { id: 7, title: 'MyGarden', image: require('../../../assets/Menu-Icons/deciduous-tree.png'), action: () => { } },
    { id: 8, title: 'MyFood', image: require('../../../assets/Menu-Icons/fork-and-knife-with-plate.png'), action: () => { } },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <MenuHeader title="MyLife+ Apps" onPressSettings={() => navigation.navigate('Setting')}/>
        <FlatList
          data={data}
          numColumns={3}
          renderItem={({ item }) => <CardMenuItem item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
