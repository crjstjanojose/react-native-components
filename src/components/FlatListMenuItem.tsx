import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {MenuItem} from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate(menuItem.component)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} size={23} color={colors.primary} />
        <Text style={{color: colors.text}}>{menuItem.name}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" size={23} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 7,
    fontSize: 18,
    color: '#5856d6',
  },
});
