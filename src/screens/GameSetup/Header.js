import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {rem} from 'rn-units';

export default function Header({children}) {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + rem(10);
  return (
    <View style={[styles.wrapper, {paddingTop}]}>
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
  },
});
