import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

const VideoComponent = () => {
  const video = React.useRef(null);
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require("../assets/videos/ball-system.mp4")}
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
    marginVertical:200,
    position: 'relative',
    zIndex:-1
  },
  video: {
    alignSelf: 'center',
    width: "100%",
    height: 200,
    transform: [{ scale: 2 }],
    position: 'absolute',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VideoComponent