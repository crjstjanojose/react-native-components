import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const {form, onChange, isSubscribe} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribe: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="Inputs" />

            <TextInput
              style={stylesText.inputStyle}
              placeholder="Informe aqui seu nome"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />

            <TextInput
              style={stylesText.inputStyle}
              placeholder="Informe seu e-mail"
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
              keyboardAppearance="dark"
            />

            <View style={stylesText.switchRow}>
              <Text style={stylesText.switchText}>Subscribe</Text>
              <CustomSwitch
                isOn={isSubscribe}
                onChange={value => onChange(value, 'isSubscribe')}
              />
            </View>

            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <TextInput
              style={stylesText.inputStyle}
              placeholder="Informe seu telefone"
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesText = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 45,
    paddingHorizontal: 10,
    marginVertical: 8,
    borderRadius: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  switchText: {
    fontSize: 25,
    color: 'black',
    opacity: 0.6,
  },
});
