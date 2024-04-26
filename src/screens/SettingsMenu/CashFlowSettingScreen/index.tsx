import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import styles from './style'; 

const CashflowScreen: React.FC = () => {
  const handleAddPress = () => {
    console.log('Add button pressed'); 
  };

  const logBankName = (bankName: string) => {
    console.log(bankName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>fetch Bank Transactions</Text>
        <TouchableOpacity onPress={handleAddPress} style={styles.addButton}>
          <Image
            source={require('../../../../assets/Settings-Icons/plusIcon.png')}
            resizeMode="contain"
            style={styles.addIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.item} onPress={() => logBankName('Ing Diba (deposit & withdrawal)')}>
        <Text style={styles.text}>Ing Diba (deposit & withdrawal)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => logBankName('N26 (deposit & withdrawal)')}>
        <Text style={styles.text}>N26 (deposit & withdrawal)</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CashflowScreen;
