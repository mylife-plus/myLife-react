import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Button,
  Alert,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SwipeListView } from 'react-native-swipe-list-view';
import initialIcons from './AvailableIcons';
import { styles } from './style';
import { storeData, loadData } from '../../../../utils/storage';


// Interfaces
interface CategoryItem {
  id: string;
  image?: any;
  isAddButton?: boolean;
}

interface CategoryData {
  name: string;
  tags: CategoryItem[];
}

// Initial categories data
const initialCategories: CategoryData[] = [
  {
    name: 'Transport',
    tags: [
      { id: 'add', isAddButton: true },
      { id: '1', image: initialIcons.busIcon },
      { id: '2', image: initialIcons.planeIcon },
      { id: '3', image: initialIcons.carIcon },
    ]
  },
  {
    name: 'Food',
    tags: [
      { id: 'add', isAddButton: true },
      { id: '1', image: initialIcons.plateIcon },
      { id: '2', image: initialIcons.tacosIcon },
      { id: '3', image: initialIcons.pizzaIcon },
    ]
  },
  {
    name: 'Sport',
    tags: [
      { id: 'add', isAddButton: true },
      { id: '1', image: initialIcons.bootIcon },
    ]
  }
];

const MemoryScreen: React.FC = () => {
  const [categories, setCategories] = useState<CategoryData[]>(initialCategories);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [tagModalVisible, setTagModalVisible] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(-1);
  const [newCategoryName, setNewCategoryName] = useState('');

  const addNewCategory = () => {
    const newCategory: CategoryData = {
      name: newCategoryName,
      tags: [{ id: 'add', isAddButton: true }]
    };
    setCategories([...categories, newCategory]);
    setCategoryModalVisible(false);
    setNewCategoryName('');
  };

  const openTagModal = (index: number) => {
    setSelectedCategoryIndex(index);
    setTagModalVisible(true);
  };
  

  const addNewTag = (icon: any) => {
    if (selectedCategoryIndex === -1) return;
    const newTag: CategoryItem = { id: `new-${Math.random()}`, image: icon };
    const updatedCategories = [...categories];
    updatedCategories[selectedCategoryIndex].tags.push(newTag);
    setCategories(updatedCategories);
    setTagModalVisible(false);
  };

  const deleteCategory = (index: number) => {
    Alert.alert("Delete Category", "Are you sure you want to delete this category?", [
      { text: "Cancel", style: "cancel" },
      { text: "OK", onPress: () => {
        const updatedCategories = [...categories];
        updatedCategories.splice(index, 1);
        setCategories(updatedCategories);
        storeData('categories', updatedCategories);
      }}
    ]);
  };

  const renderHiddenItem = (data: { item: CategoryData; index: number; }, _rowMap: any) => (
    <View style={styles.backRightBtn}>
      <TouchableOpacity style={styles.backRightBtnRight} onPress={() => deleteCategory(data.index)}>
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
  

  const renderIconOptions = () => {
    if (selectedCategoryIndex === -1) return null;  
    const usedIcons = new Set(categories[selectedCategoryIndex].tags.map(tag => tag.image));
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: 10 }}>
        {Object.keys(initialIcons).map(key => {
          const icon = initialIcons[key as keyof typeof initialIcons];
          if (!usedIcons.has(icon)) {
            return (
              <TouchableOpacity key={key} onPress={() => addNewTag(icon)} style={{ width: '25%', alignItems: 'center', marginBottom: 10 }}>
                <Image source={icon} style={{ width: 50, height: 50 }} />
              </TouchableOpacity>
            );
          }
          return null; 
        })}
      </View>
    );
  };
  
  

  const renderCategoryItem = ({ item, index }: { item: CategoryItem, index: number }) => {
    if (item.isAddButton) {
      return (
        <TouchableOpacity style={styles.addButton} onPress={() => openTagModal(index)}>
          <Icon name="add-circle-outline" size={36} color="#000" />
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.iconContainer}>
        <Image source={item.image} style={styles.categoryIcon} />
      </View>
    );
  };

  const renderCategoryList = (category: CategoryData, categoryIndex: number) => (
    <>
      <Text style={styles.subtitle}>{category.name}</Text>
      <FlatList
        horizontal
        data={category.tags}
        renderItem={({ item }) => renderCategoryItem({ item, index: categoryIndex })}
        keyExtractor={(item) => `${category.name}-${item.id}`}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.sectionSeparator} />
    </>
  );

  const closeModal = () => {
    setCategoryModalVisible(false);
    setTagModalVisible(false);
  };

  useEffect(() => {
    loadData('categories').then(data => {
      if (data) {
        setCategories(data);
      } else {
        setCategories(initialCategories);
      }
    });
  }, []);

  useEffect(() => {
    storeData('categories', categories);
  }, [categories]);
  
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.title}>Meta #</Text>
        <TouchableOpacity onPress={() => setCategoryModalVisible(true)}>
          <Image source={require('../../../../assets/Settings-Icons/plusIcon.png')} style={{ width: 40, height: 40, marginRight: 10 }} />
        </TouchableOpacity>
      </View>
      <SwipeListView
  data={categories}
  renderItem={({ item, index }) => renderCategoryList(item, index)}
  renderHiddenItem={renderHiddenItem}
  rightOpenValue={-75} //-75
  disableRightSwipe={true}
  keyExtractor={(item, index) => `category-${index}`}
/>

      <Modal
        animationType="slide"
        transparent={true}
        visible={categoryModalVisible}
        onRequestClose={closeModal}
      >
        <TouchableOpacity
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          activeOpacity={1}
          onPressOut={closeModal}
        >
          <TouchableOpacity
            style={{ marginTop: 50, marginHorizontal: 20, backgroundColor: 'white', padding: 20, borderRadius: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5 }}
            activeOpacity={1}
            onPress={() => {}}
          >
            <TextInput
              placeholder="Enter new category name"
              value={newCategoryName}
              onChangeText={setNewCategoryName}
              style={{ height: 40, marginBottom: 20, borderWidth: 1, padding: 10, borderRadius: 10 }}
            />
            <Button title="Add Category" onPress={() => {
              const newCategory: CategoryData = {
                name: newCategoryName,
                tags: [{ id: 'add', isAddButton: true }]
              };
              setCategories([...categories, newCategory]);
              closeModal();
            }} />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={tagModalVisible}
        onRequestClose={closeModal}
      >
        <TouchableOpacity
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          activeOpacity={1}
          onPressOut={closeModal}
        >
          <View style={styles.modalView} onStartShouldSetResponder={() => true}>
            {renderIconOptions()}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};  
export default MemoryScreen;
