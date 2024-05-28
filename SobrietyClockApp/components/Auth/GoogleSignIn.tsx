import React, { useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID', // From Google Developer Console
});

interface GoogleSignInProps {
  onSignIn: (userInfo: any) => void;
}

const GoogleSignIn: React.FC<GoogleSignInProps> = ({ onSignIn }) => {
  useEffect(() => {
    const checkSignedInUser = async () => {
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        const userInfo = await GoogleSignin.getCurrentUser();
        onSignIn(userInfo);
      }
    };
    checkSignedInUser();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      onSignIn(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Sign in cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Sign in in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Play services not available');
      } else {
        Alert.alert('An error occurred during sign in');
      }
    }
  };

  return (
    <View>
      <Button title="Sign in with Google" onPress={signIn} />
    </View>
  );
};

export default GoogleSignIn;
