import React from 'react';
import { View, StyleSheet } from 'react-native';
import GoogleSignIn from '../components/Auth/GoogleSignIn';
import AppleSignIn from '../components/Auth/AppleSignIn';

const AuthScreen: React.FC = ({ navigation }) => {
  const handleSignIn = (userInfo: any) => {
    // Save user info to context or state management
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <GoogleSignIn onSignIn={handleSignIn} />
      <AppleSignIn onSignIn={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthScreen;
