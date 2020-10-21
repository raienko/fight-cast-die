import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {rem} from 'rn-units';
import Text from 'src/components/Text';
import Button from 'src/components/Button';

export default () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.wrapper, insets]} pointerEvents="box-none">
      <Text text="world.title" style={styles.title} />
      <Button
        text="settings"
        style={styles.settings}
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginHorizontal: rem(10),
    marginVertical: rem(10),
  },
  settings: {
    position: 'absolute',
    right: rem(0),
    top: rem(0),
  },
});
