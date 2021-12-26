import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {SlidesScreen} from '../components/SlidesScreen';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {AlertScreen} from '../screens/AlertScreen';
import {Animation101Screen} from '../screens/Animation101Screen';
import {Animation102Screen} from '../screens/Animation102Screen';
import {ChangeThemeScreen} from '../screens/ChangeThemeScreen';
import {CustomSectionListScreen} from '../screens/CustomSectionListScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {ModalScreen} from '../screens/ModalScreen';
import {PullToRefreshScreen} from '../screens/PullToRefreshScreen';
import {ScrollScreen} from '../screens/ScrollScreen';
import {SwitchScreen} from '../screens/SwitchScreen';
import {TextInputScreen} from '../screens/TextInputScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="Animation101Screen"
          component={Animation101Screen}
        />
        <Stack.Screen
          name="Animation102Screen"
          component={Animation102Screen}
        />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen name="ScrollScreen" component={ScrollScreen} />
        <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
        <Stack.Screen
          name="CustomSectionListScreen"
          component={CustomSectionListScreen}
        />
        <Stack.Screen
          name="PullToRefreshScreen"
          component={PullToRefreshScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
