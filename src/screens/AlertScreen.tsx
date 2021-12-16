import React from 'react';
import {Alert, Button, View} from 'react-native';
import prompt from 'react-native-prompt-android';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Titulo do Alerta',
      'Corpo do Alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
          style: 'default',
        },
      ],
      {
        // cancelable: true,
        // onDismiss: () => console.log('onDismiss'),
      },
    );
  };

  const showPrompt = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alert" />
      <Button title="Mostrar alerta" onPress={showAlert} />
      <Button title="Mostrar alerta" onPress={showPrompt} />
    </View>
  );
};
