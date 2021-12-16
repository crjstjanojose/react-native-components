import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          color="#5856d6"
          size={30}
          style={{position: 'absolute'}}
        />
      )}

      <Animated.Image
        source={{uri}}
        style={{
          ...(style as any),
          // width: '100%',
          // height: 400,
          opacity,
        }}
        onLoadEnd={finishLoading}
      />
    </View>
  );
};
