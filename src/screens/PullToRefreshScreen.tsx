import React, {useState} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets();

  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Terminado');
      setRefreshing(false);
      setData('Hola Mundo');
    }, 2500);
  };

  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={15}
          progressBackgroundColor="#fff"
          colors={['#6c089b', '#3dbbaa', '#f56363']}
          style={{backgroundColor: '#5856d6'}}
          tintColor="white"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull To Refresh" />

        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
