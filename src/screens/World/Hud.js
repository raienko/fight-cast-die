import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {rem} from 'rn-units';
import Text from 'src/components/Text';
import Button from 'src/components/Button';

export default () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <Text text="world.title" />
      <Button text="settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: rem(40),
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
