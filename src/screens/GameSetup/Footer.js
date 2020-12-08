import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {rem} from 'rn-units';

export default function Footer({children}) {
  const insets = useSafeAreaInsets();
  const paddingBottom = insets.bottom + rem(10);
  return (
    <View style={[styles.wrapper, {paddingBottom}]}>
      <View style={styles.container}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#000f35',
  },
  container: {
    marginVertical: rem(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
