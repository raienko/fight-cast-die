import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

export default function List({children}) {
  return (
    <View style={styles.wrapper}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
