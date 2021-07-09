import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

export default function Splash({navigation}) {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/dragon.json')}
        // source={require('../assets/load.json')}
        // source={require('../assets/like.json')}
        autoPlay
        loop={false}
        speed={0.5}
        onAnimationFinish={() => {
          console.log('Animation Finished!');
          // loop={false};
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
});
