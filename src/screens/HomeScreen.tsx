import React from 'react';
import {FlatList, View} from 'react-native';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {HeaderTitle} from '../components/HeaderTitle';
import {ItemSeparator} from '../components/ItemSeparator';
import {menuItems} from '../data/menuItens';
import {styles} from '../theme/appTheme';
//import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opções" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
