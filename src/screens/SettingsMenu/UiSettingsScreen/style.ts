import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD665',
        paddingVertical: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        width: '100%',
    },
    itemDisabled: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        width: '100%',
    },
    title: {
        flex: 1,
        fontSize: 18,
        color: '#000',
    },
    titleDisabled: {
        flex: 1,
        fontSize: 18,
        color: '#AAA',
    },
    subtitle: {
        flex: 1,
        fontSize: 16,
        color: '#999',
    },
    subtitleDisabled: {
        flex: 1,
        fontSize: 16,
        color: '#F6A8A8',
        paddingHorizontal: 20,
    },
    switchLabel: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold',
        marginHorizontal: 5,
    },
    warning: {
        fontSize: 14,
        color: '#F6A8A8',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    icon: {
        marginLeft: 10,
    },
    spacer: {
        height: 5,
    },
    customSwitch: {
        width: 60,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        paddingHorizontal: 5,
    },
    switchOn: {
        backgroundColor: '#0A74DA',
        justifyContent: 'flex-start',
    },
    switchOff: {
        backgroundColor: '#ccc',
        justifyContent: 'flex-end',
    },
    switchSlider: {
        width: 26,
        height: 26,
        backgroundColor: '#FFF',
        borderRadius: 13,
        position: 'absolute',
    },
    switchSliderLeft: {
        left: 2,
    },
    switchSliderRight: {
        right: 2,
    },
});

export default styles;
