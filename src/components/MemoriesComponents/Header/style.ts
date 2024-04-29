import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFD665',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        height: 100,
        justifyContent: 'center',
        width : "100%",
        paddingHorizontal: 16,
    },
    elementsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 5,
        backgroundColor: 'white',
        flexDirection: 'row', // Allow icons to be placed inside
        justifyContent: 'space-between', // Align icons with input
    },
    icon: {
        marginHorizontal: 8, // Adjust horizontal margin for icons
    },
});

export default styles;
