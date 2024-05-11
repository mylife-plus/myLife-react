import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import ScrollPosts from '../../components/MemoriesComponents/scrollPostList'

function ScrollPostScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollPosts/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ScrollPostScreen