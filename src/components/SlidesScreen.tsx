import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimation} from '../hooks/useAnimation';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any> {}

export const SlidesScreen = ({navigation}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {opacity, fadeIn} = useAnimation();

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 5,
          padding: 4,
        }}>
        <Image
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center',
          }}
          source={item.img}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50}}>
      <Carousel
        // ref={c => {this._carousel = c;}}
        data={items}
        renderItem={({item}): any => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          if (index === items.length - 1) {
            fadeIn();
          }
          setActiveIndex(index);
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: '#5856d6',
          }}
        />

        {activeIndex === items.length - 1 && (
          <Animated.View style={{opacity}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeScreen')}
              style={{
                flexDirection: 'row',
                backgroundColor: '#5856d6',
                width: 105,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}
              activeOpacity={0.7}>
              <Icon name="chevron-forward-outline" size={20} color="white" />
              <Text style={{color: 'white', fontSize: 20}}>Entrar</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856d6',
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
    opacity: 0.7,
  },
});
