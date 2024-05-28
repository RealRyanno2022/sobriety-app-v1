import React from 'react';
import { View, Button, Alert } from 'react-native';
import { appleAuth } from '@invertase/react-native-apple-authentication';

interface AppleSignInProps {
  onSignIn: (userInfo: any) => void;
}

const AppleSignIn: React.FC<AppleSignInProps> = ({ onSignIn }) => {
  const signIn = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
      if (credentialState === appleAuth.State.AUTHORIZED) {
        onSignIn(appleAuthRequestResponse);
      }
    } catch (error) {
      Alert.alert('An error occurred during Apple sign in');
    }
  };

  return (
    <View>
      <Button title="Sign in with Apple" onPress={signIn} />
    </View>
  );
};

export default AppleSignIn;
