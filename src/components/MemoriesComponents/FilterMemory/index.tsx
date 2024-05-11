import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Modal, Button, FlatList, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';

const FilterMemory: React.FC = () => {
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(new Date());
  const [location, setLocation] = useState<string>('');
  const [radius, setRadius] = useState<number>(10);
  const [contacts, setContacts] = useState<string[]>([]);
  const [emojis, setEmojis] = useState<string[]>([
    '😊', 
    '😂', 
    '❤️', 
    '😄', 
    '😍', 
    '🥰', 
    '😎', 
    '🤩', 
    '😋', 
    '😜', 
    '🤪', 
    '😇', 
    '😉', 
    '🤗', 
    '😌', 
    '😘', 
    '🤔', 
    '😏', 
    '😒', 
    '🙃',
    '😳',
    '😬',
    '🥺',
    '😭',
    '😤',
    '😠',
    '🤯',
    '😱',
    '😵',
    '🥴',
    '😈',
    '👿',
    '💀',
    '👻',
    '👽',
    '🤖',
    '💩',
    '😺',
    '😸',
    '😹',
    '😻',
    '😼',
    '😽',
    '🙀',
    '😿',
    '😾',
  ]);
  const [showRadiusModal, setShowRadiusModal] = useState<boolean>(false);
  const [newContact, setNewContact] = useState<string>('');
  const [memories, setMemories] = useState<string[]>([]); // Dummy memories array

  // Determine if date range is selected
  const isDateRangeSelected = fromDate !== toDate;

  // Handler for restoring date range
  const restoreDateRange = () => {
    setFromDate(new Date());
    setToDate(new Date());
  };

  const addContact = () => {
    if (newContact.trim() !== '') {
      setContacts((prevContacts) => [...prevContacts, newContact.trim()]);
      setNewContact('');
    }
  };

  const toggleEmojiSelection = (emoji: string) => {
    const index = selectedEmojis.indexOf(emoji);
    if (index === -1) {
      setSelectedEmojis([...selectedEmojis, emoji]);
    } else {
      const newSelectedEmojis = [...selectedEmojis];
      newSelectedEmojis.splice(index, 1);
      setSelectedEmojis(newSelectedEmojis);
    }
  };

  const filterMemories = () => {
    // Apply filters
    let filteredMemories = memories;
    
    // Filter by date range
    filteredMemories = filteredMemories.filter(memory => {
      const memoryDate = new Date(memory.date);
      return memoryDate >= fromDate && memoryDate <= toDate;
    });

    // Filter by location
    filteredMemories = filteredMemories.filter(memory => memory.location.toLowerCase().includes(location.toLowerCase()));

    // Filter by radius
    filteredMemories = filteredMemories.filter(memory => calculateDistance(memory.location) <= radius);

    // Filter by contacts
    filteredMemories = filteredMemories.filter(memory => contacts.some(contact => memory.contacts.includes(contact)));

    // Filter by emojis
    filteredMemories = filteredMemories.filter(memory => selectedEmojis.some(emoji => memory.description.includes(emoji)));

    // Set the filtered memories state
    setFilteredMemories(filteredMemories);
  };

  // Dummy function to calculate distance
  const calculateDistance = (location: string) => {
    // Dummy implementation
    return Math.random() * 100;
  };

  const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);
  const [filteredMemories, setFilteredMemories] = useState<string[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Date range row */}
      <View style={styles.dateRangeRow}>
        {/* From Date */}
        <View style={styles.datePicker}>
          <Text style={styles.label}><Ionicons name="calendar-outline" size={16} color="black" />
            From:
          </Text>
          <DateTimePicker value={fromDate} mode="date" onChange={(event, date) => date && setFromDate(date)} />
        </View>
        {/* To Date */}
        <View style={styles.datePicker}>
          <Text style={styles.label}><Ionicons name="calendar-outline" size={16} color="black" />
            To:
          </Text>
          <DateTimePicker value={toDate} mode="date" onChange={(event, date) => date && setToDate(date)} />
        </View>
        {isDateRangeSelected && (
          <TouchableOpacity onPress={restoreDateRange} style={styles.restoreIcon}>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.locationRadiusRow}>
        {/* Location Input */}
        <View style={styles.inputField}>
          <Text style={styles.label}><Ionicons name="location-outline" size={16} color="black" />
            Location:
          </Text>
          <TextInput
            style={styles.textInput}
            value={location}
            onChangeText={setLocation}
          />
        </View>
        {/* Radius input and button */}
        <TouchableOpacity style={styles.radiusButton} onPress={() => setShowRadiusModal(true)}>
          <Text style={styles.label}><Ionicons name="arrow-back" size={16} color="black" /><Ionicons name="arrow-forward" size={16} color="black" />
            Radius: {radius} km
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={showRadiusModal}
        transparent
        // animationType="slide"
        onRequestClose={() => setShowRadiusModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adjust Radius</Text>
            <Slider
              value={radius}
              onValueChange={setRadius}
              minimumValue={0}
              maximumValue={100}
              step={5}
            />
            <View style={styles.modalButton}>
              <Button title="Close" onPress={() => setShowRadiusModal(false)} />
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.contacts}>
        <Text style={styles.label}><Ionicons name="person-outline" size={16} color="black" />Contacts:</Text>
        <FlatList
          data={contacts}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.contactCard}>
              <Text style={styles.contactText}>{item}</Text>
            </View>
          )}
        />
        <TouchableOpacity onPress={addContact} style={[styles.arrowButton, styles.rightAlign]}>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.categories}>
        <Text style={styles.label}>Categories:</Text>
        {/* <FlatList
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.categoryCard}>
              <Text style={styles.categoryText}>{item}</Text>
            </View>
          )}
        /> */}
        <TouchableOpacity onPress={filterMemories} style={[styles.arrowButton, styles.rightAlign]}>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Emojis */}
      <View style={styles.emojis}>
        <Text style={styles.label}>Emojis:</Text>
        {/* Display emojis as cards */}
        <ScrollView horizontal={true}>
          {emojis.map((emoji, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.emojiCard,
                selectedEmojis.includes(emoji) && styles.selectedEmoji,
              ]}
              onPress={() => toggleEmojiSelection(emoji)}
            >
              <Text style={styles.emojiText}>{emoji}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Display filtered memories */}
      <FlatList
        data={filteredMemories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.memoryItem}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  dateRangeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'flex-start',
    height: '10%',
    borderBottomWidth: 1,
    borderBottomColor: '#adb5bd',
  },
  datePicker: {
    flex: 1,
    marginRight: 60,
  },
  restoreIcon: {
    paddingLeft: 10,
  },
  locationRadiusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#adb5bd',
    height: '10%',
  },
  inputField: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#adb5bd',
  },
  radiusButton: {
    paddingLeft: 10,
    paddingVertical: 10,
  },
  contacts: {
    height: "10%",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#adb5bd',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 8,
    marginRight: 10,
  },
  contactText: {
    color: '#333',
  },
  arrowButton: {
    padding: 20,
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginLeft: 250
  },
  categories: {
    height: "10%",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#adb5bd',
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 8,
    marginRight: 10,
  },
  categoryText: {
    color: '#333',
  },
  emojis: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#adb5bd',
    height: "10%",
  },
  emojiCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedEmoji: {
    backgroundColor: '#d3f5d9',
  },
  emojiText: {
    color: '#333',
  },
  emojiExpand: {
    position: 'absolute',
    top: 50,
    right: 0,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#adb5bd',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rightAlign: {
    alignSelf: 'flex-end',
  },
  memoryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 20,
  },
});

export default FilterMemory;
