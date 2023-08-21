import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

const LogoVideoComponent = () => {
  const video = React.useRef(null);
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require("../assets/videos/LogoSecond.mp4")}
        useNativeControls={false}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        shouldPlay
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop:60,
    marginBottom:130,
    marginLeft:25,
    position: 'relative',
    zIndex:-1
  },
  video: {
    alignSelf: 'center',
    width: "100%",
    height: 200,
    transform: [{ scale: 1.6 }],
    position: 'absolute',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LogoVideoComponent