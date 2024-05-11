import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
 import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import styles from './style'; // Import the styles
import { useNavigation } from '@react-navigation/native';


const AddMemory: React.FC = () => {
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [location, setLocation] = useState('');
    const [contacts, setContacts] = useState('');
    const [tags, setTags] = useState('');
    
    // Date change handler
    const onDateChange = (event: any, selectedDate: Date | undefined) => {
        setShowDatePicker(false);
        if (selectedDate) setDate(selectedDate);
    };

    // Time change handler
    const onTimeChange = (event: any, selectedTime: Date | undefined) => {
        setShowTimePicker(false);
        if (selectedTime) setTime(selectedTime);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                {/* Date input */}
                <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>
                    <Text style={styles.inputLabel}>Date</Text>
                    <Text style={styles.inputValue}>{date.toLocaleDateString()}</Text>
                </TouchableOpacity>
                {/* Date picker */}
                {showDatePicker && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onDateChange}
                    />
                )}

                {/* Time input */}
                <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.timeInput}>
                    <Text style={styles.inputLabel}>Time</Text>
                    <Text style={styles.inputValue}>{time.toLocaleTimeString()}</Text>
                </TouchableOpacity>
                {/* Time picker */}
                {showTimePicker && (
                    <DateTimePicker
                        value={time}
                        mode="time"
                        display="default"
                        onChange={onTimeChange}
                    />
                )}

                {/* Location input */}
                <TextInput
                    placeholder="Location"
                    value={location}
                    onChangeText={setLocation}
                    style={styles.textInput}
                />

                {/* Contacts input */}
                <TextInput
                    placeholder="Contacts"
                    value={contacts}
                    onChangeText={setContacts}
                    style={styles.textInput}
                />

                {/* Tags input */}
                <TextInput
                    placeholder="Tags"
                    value={tags}
                    onChangeText={setTags}
                    style={styles.textInput}
                    onPressIn={()=> navigation.navigate('AddMemorEmoji')}
                />
            </View>

            {/* Media types row */}
            <View style={styles.mediaTypesRow}>
                <TouchableOpacity style={styles.mediaButton}>
                    <Ionicons name="text-outline" size={24} color="black" />
                    <Text style={styles.mediaText}>Text</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.mediaButton}>
                    <MaterialIcons name="photo-camera" size={24} color="black" />
                    <Text style={styles.mediaText}>Photo</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.mediaButton}>
                    <MaterialIcons name="mic" size={24} color="black" />
                    <Text style={styles.mediaText}>Audio</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.mediaButton}>
                    <Ionicons name="videocam-outline" size={24} color="black" />
                    <Text style={styles.mediaText}>Video</Text>
                </TouchableOpacity>
            </View>
            </View>
            
        </ScrollView>
    );
};

export default AddMemory;

