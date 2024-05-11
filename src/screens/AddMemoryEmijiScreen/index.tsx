import { View, Text } from 'react-native'
import React from 'react'
import MemoryEmojiComponent from '../../components/MemoriesComponents/emojis'
import EmojisHeader from '../../components/Headers/EmojisHeader'

const AddMemoryEmojiScreen = () => {
  return (
    <View>
        <EmojisHeader/>
      <MemoryEmojiComponent />
    </View>
  )
}

export default AddMemoryEmojiScreen