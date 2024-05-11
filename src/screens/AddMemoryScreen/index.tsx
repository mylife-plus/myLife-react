import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import AddMemoryHeader from '../../components/Headers/AddMemoryHeader'
import AddMemory from '../../components/MemoriesComponents/AddMemory'

const AddMemoryScreen = () => {
    return (
        <View style={styles.container}>
            <AddMemoryHeader />
            <AddMemory/>
            <Text>test</Text>
        </View>
    )
}

export default AddMemoryScreen