import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, SafeAreaView, FlatList, StyleSheet, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface EmojiCategory {
    name: string;
    emojis: string[];
}

const emojiCategoriesInitial: EmojiCategory[] = [
    { name: 'Transport', emojis: ['✈️', '🚗'] },
    { name: 'Food', emojis: ['🌭', '🍔'] },
    { name: 'Sport', emojis: ['⚽', '🏀'] },
];

const MemoryEmojiComponent: React.FC = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);
    const [newEmoji, setNewEmoji] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>(emojiCategoriesInitial[0].name);
    const [emojiCategories, setEmojiCategories] = useState<EmojiCategory[]>(emojiCategoriesInitial);
    const [isCategoryModalVisible, setCategoryModalVisible] = useState<boolean>(false);
    const [isNewCategoryModalVisible, setNewCategoryModalVisible] = useState<boolean>(false);
    const [newCategory, setNewCategory] = useState<string>('');

    // Toggle category modal visibility
    const toggleCategoryModal = useCallback(() => {
        setCategoryModalVisible((prev) => !prev);
    }, []);

    // Toggle new category modal visibility
    const toggleNewCategoryModal = useCallback(() => {
        setNewCategoryModalVisible((prev) => !prev);
    }, []);

    // Add a new category
    const addCategory = useCallback(() => {
        if (newCategory.trim()) {
            const updatedCategory = { name: newCategory, emojis: [] };
            setEmojiCategories((prevCategories) => [...prevCategories, updatedCategory]);
            setSelectedCategory(newCategory); // Automatically select the new category
            setNewCategory('');
            toggleNewCategoryModal();
        }
    }, [newCategory, toggleNewCategoryModal]);

    // Add a new emoji
    const addEmoji = useCallback(() => {
        if (newEmoji.trim() && selectedCategory) {
            setEmojiCategories((prevCategories) =>
                prevCategories.map((category) => {
                    if (category.name === selectedCategory) {
                        return { ...category, emojis: [...category.emojis, newEmoji] };
                    }
                    return category;
                })
            );
            setNewEmoji('');
        }
    }, [newEmoji, selectedCategory]);

    // Toggle emoji selection
    const toggleEmojiSelection = useCallback(
        (emoji: string) => {
            setSelectedEmojis((prevSelectedEmojis) => {
                if (prevSelectedEmojis.includes(emoji)) {
                    return prevSelectedEmojis.filter((e) => e !== emoji);
                } else {
                    return [...prevSelectedEmojis, emoji];
                }
            });
        },
        []
    );

    // Toggle category selection and associated emojis
    const toggleCategorySelection = useCallback(
        (category: EmojiCategory) => {
            const isCategorySelected = selectedCategories.includes(category.name);
            let updatedSelectedCategories;

            if (isCategorySelected) {
                updatedSelectedCategories = selectedCategories.filter((cat) => cat !== category.name);
                setSelectedEmojis((prevSelectedEmojis) =>
                    prevSelectedEmojis.filter((emoji) => !category.emojis.includes(emoji))
                );
            } else {
                updatedSelectedCategories = [...selectedCategories, category.name];
                setSelectedEmojis((prevSelectedEmojis) => [
                    ...prevSelectedEmojis,
                    ...category.emojis.filter((emoji) => !prevSelectedEmojis.includes(emoji)),
                ]);
            }
            setSelectedCategories(updatedSelectedCategories);
        },
        [selectedCategories]
    );

    // Memoize the list of category options
    const categoryOptions = useMemo(
        () =>
            emojiCategories.map((category) => (
                <TouchableOpacity
                    key={category.name}
                    onPress={() => {
                        setSelectedCategory(category.name);
                        toggleCategoryModal();
                    }}
                    style={styles.categoryOption}
                >
                    <Text>{category.name}</Text>
                </TouchableOpacity>
            )),
        [emojiCategories, toggleCategoryModal]
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={emojiCategories}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <View style={styles.categoryContainer}>
                        {/* Category title */}
                        <TouchableOpacity
                            onPress={() => toggleCategorySelection(item)}
                            style={[
                                styles.categoryRow,
                                selectedCategories.includes(item.name) && styles.selectedCategory,
                            ]}
                        >
                            <Text style={styles.categoryName}>{item.name}</Text>
                        </TouchableOpacity>

                        {/* Emojis row */}
                        <View style={styles.emojisRow}>
                            {item.emojis.map((emoji) => (
                                <TouchableOpacity
                                    key={emoji}
                                    onPress={() => toggleEmojiSelection(emoji)}
                                    style={[
                                        styles.emojiContainer,
                                        selectedEmojis.includes(emoji) && styles.selectedEmoji,
                                    ]}
                                >
                                    <Text style={styles.emoji}>{emoji}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                )}
            />

            {/* Emoji and category input row */}
            <View style={styles.inputRow}>
                {/* Emoji input */}
                <TextInput
                    value={newEmoji}
                    onChangeText={setNewEmoji}
                    placeholder="New emoji"
                    style={styles.emojiInput}
                />

                {/* Custom category selector dropdown */}
                <TouchableOpacity onPress={toggleCategoryModal} style={styles.categorySelector}>
                    <Text>{selectedCategory}</Text>
                    <Ionicons name="chevron-down" size={20} color="black" />
                </TouchableOpacity>

                {/* Add emoji button */}
                <TouchableOpacity onPress={addEmoji} style={styles.addEmojiButton}>
                    <Ionicons name="add" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Modal for selecting a category or adding a new one */}
            <Modal
                visible={isCategoryModalVisible}
                transparent
                onRequestClose={toggleCategoryModal}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <FlatList
                            data={emojiCategories}
                            keyExtractor={(item) => item.name}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        setSelectedCategory(item.name);
                                        toggleCategoryModal();
                                    }}
                                    style={styles.categoryOption}
                                >
                                    <Text>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        {/* Option to add a new category */}
                        <TouchableOpacity
                            onPress={() => {
                                toggleCategoryModal();
                                toggleNewCategoryModal();
                            }}
                            style={styles.categoryOption}
                        >
                            <Text>Add Category</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal for entering a new category */}
            <Modal
                visible={isNewCategoryModalVisible}
                transparent
                onRequestClose={toggleNewCategoryModal}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        {/* <Text style={styles.modalTitle}>Add a New Category</Text> Title for the modal */}
                        <TextInput
                            value={newCategory}
                            onChangeText={setNewCategory}
                            placeholder="New category"
                            style={styles.modalInput}
                        />
                        <View style={styles.modalButtons}>
                            <Button title="Done" onPress={addCategory} />
                            <Button title="Cancel" onPress={toggleNewCategoryModal} color="red" />
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Navigation bar */}
            {/* <View style={styles.navBar}>
                <TouchableOpacity style={styles.navButton}>
                    <Text style={styles.navText}>New</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                    <Text style={styles.navText}>Categories</Text>
                </TouchableOpacity>
            </View> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f7e2a8',
        height: '87%',
    },
    categoryContainer: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },
    categoryRow: {
        padding: 10,
        borderRadius: 8,
        
    },
    selectedCategory: {
        // backgroundColor: '#98FB98', // Green background for selected category
    },
    categoryName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    emojisRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8,
    },
    emojiContainer: {
        padding: 10,
        borderRadius: 8,
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: '#F5F5F5',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },
    selectedEmoji: {
        backgroundColor: '#98FB98', // Green background for selected emoji
    },
    emoji: {
        fontSize: 24,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10,
        backgroundColor: '#fff',
        height: 70,
    },
    emojiInput: {
        width: 50,
        height: 40,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 5,
        backgroundColor: '#F5F5F5',
    },
    addEmojiButton: {
        padding: 10,
    },
    categorySelector: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#e0e0e0',
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        width: '50%',
        justifyContent: 'space-between',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    modalInput: {
        marginBottom: 10,
        padding: 10,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    categoryOption: {
        padding: 10,
        marginBottom: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: 'gray',
        paddingTop: 10,
        backgroundColor: '#ffffff',
    },
    navButton: {
        alignItems: 'center',
        padding: 10,
    },
    navText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MemoryEmojiComponent;
