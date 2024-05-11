import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD665',
    },
    header: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        height: 40
    },
    arrowIcon: {
        fontSize: 14,
        color: '#666',
        fontWeight: 'bold',
        marginHorizontal: 5, 
    },
    searchInput: {
        flex: 1,
        height: 40,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        color: '#000',
        fontSize: 16,
        borderWidth: 0,
        borderRadius: 10
    },
    icon: {
        marginRight: 20,
        marginLeft: 10,
        color: 'rgba(0, 0, 0, 0.5)',
    },
    postContainer: {
        backgroundColor: '#FFD665',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    postTextBackground: {
        backgroundColor: 'white',
        padding: 15
    },
    postText: {
        fontSize: 16,

    },
    postFooter: {
    },
    userDetails: {
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: 'transparent',
    },
    avatar: {
        width: 25, 
        height: 25, 
    },

    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    userAndInteraction: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    interactionDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    interactionText: {
        fontSize: 14,
        marginLeft: 5,
        marginRight: 5,
        color: '#666',
    },
    time: {
        fontSize: 12,
        color: '#666',
    },
    commentDetails: {

        flexDirection: 'row',
        alignItems: 'center',
        
    },
    toTheLeft: {
        alignItems: 'flex-end',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 10,
    }
    
});

export default styles;
