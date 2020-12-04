import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from 'src/components/Button';

export default function Controls() {
  const [playing, setPlaying] = useState(false);
  const navigation = useNavigation();

  const create = () => {
    setPlaying(true);
    navigation.navigate('GameSetup');
  };

  const resume = () => {
    navigation.navigate('GameSetup');
  };

  return (
    <View style={styles.wrapper}>
      {
        playing
        && <Button text="Abandon" onPress={() => setPlaying(false)} />
      }
      {
        !playing && <Button text="Create" onPress={create}/>
      }
      {
        playing && <Button text="Resume" onPress={resume}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
