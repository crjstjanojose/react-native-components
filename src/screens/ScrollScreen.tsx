import React, {useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {FadeInImage} from '../components/FadeInImage';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const ScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{width: '100%', height: 400}}
      />
      // <Image
      //   source={{uri: `https://picsum.photos/id/${item}/500/400`}}
      //   style={{width: '100%', height: 400}}
      // />
    );
  };

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  return (
    <View>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={styles.globalMargin}>
            <HeaderTitle title="Scroll Infinite" />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: 'center'}}>
            <ActivityIndicator size={40} color="#5856d6" />
          </View>
        )}
      />
    </View>
  );
};
