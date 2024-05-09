import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    screenBackground: {
        flex: 1,
        backgroundColor: '#F6DD8F',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF7E3'
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    spacerScreen: {
        height: 10,
        backgroundColor: '#F6DD8F'
    },
    spacer: {
        height: 15,
    },
    headerIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    headerText: {
        fontSize: 20,
        color: '#AAA',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        width: '100%',
    },
    title: {
        flex: 1,
        fontSize: 18,
        color: '#000',
    },
    redArrow: {
        color: 'red' 
    },
    itemErase: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        width: '100%',
    },
    titleErase: {
        fontSize: 18,
        color: 'red',
    },
});

export default style;
