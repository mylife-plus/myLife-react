import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // padding: 16,
        backgroundColor: '#FFD665', // Set the background color of the whole header
        opacity : 0.5
    },
    formContainer: {
        backgroundColor: 'white',
    },
    inputContainer: {
        marginBottom: 16,
    },
    dateInput: {
        // marginBottom: 16,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        // borderRadius: 8,
    },
    timeInput: {
        // marginBottom: 16,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        // borderRadius: 8,
    },
    inputLabel: {
        color: '#000',
    },
    inputValue: {
        color: '#000',
    },
    textInput: {
        // marginBottom: 16,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        // borderRadius: 8,
    },
    mediaTypesRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8,
    },
    mediaButton: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    mediaText: {
        marginTop: 4,
    },
});

export default styles;
