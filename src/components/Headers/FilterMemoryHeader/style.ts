import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFD665', // Set the header background color
        height: 100, // Height of the header
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 16, // Padding for the header
        alignItems: 'center', // Align the elements in the center
    },
    elementsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '110%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background color
        height: 50, // Height of the elements
        paddingHorizontal: 16, // Adjust padding for the elements container
        paddingVertical: 8, // Add vertical padding if desired
        marginTop: 40,
        // borderRadius: 10, // Optional: Add border radius to soften the edges of the container
    },
    icon: {
        padding: 8, // Padding around icons
    },
    title: {
        fontSize: 18, // Adjust font size if needed
        fontWeight: 'bold', // Bold font for the title
        color: 'black', // Set the color of the title
        // alignItems: 'center', // Align the title in the center

    },
    titleContainer: {
        alignItems: 'center', // Align the title in the center
    },
});

export default styles;
