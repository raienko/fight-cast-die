import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from 'src/components/Button';

export default function Controls() {
  const [playing, setPlaying] = useState(false);
  return (
    <View style={styles.wrapper}>
      {
        playing
        && <Button text="Abandon" onPress={() => setPlaying(false)} />
      }
      <Button
        text={playing ? 'Return' : 'Create'}
        onPress={() => setPlaying(!playing)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
