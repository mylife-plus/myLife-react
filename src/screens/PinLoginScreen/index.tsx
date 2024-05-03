import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { authenticateAsync } from 'expo-local-authentication';
import { useAppState } from '../../state/App/AppSelectors';



  const PinCodeInput = () => {
    const { appConfig, setAppState } = useAppState();

    // useEffect(() => {
    //     handleBiometricAuthentication();

    // }, []);
    const handleBiometricAuthentication = async () => {
        try {
          const { success } = await authenticateAsync();
          if (success) {
            // Biometric authentication successful
            console.log('Biometric authentication successful');
            setAppState('Home')

    
          } else {
            // Biometric authentication failed or user canceled
            console.log('Biometric authentication failed or user canceled');
          }
        } catch (error) {
          console.error('Error during biometric authentication:', error);
        }
      };
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Authenticate with Pin Code</Text>
      <TouchableOpacity style={styles.biometricButton} onPress={handleBiometricAuthentication}>
        <Text style={styles.biometricButtonText}>Authenticate</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  biometricButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  biometricButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PinCodeInput;
