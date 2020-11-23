import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from 'src/components/Button';
import * as globalActions from 'src/stores/global/actions';

export default function Hud({children}) {
  return (
    <View style={styles.wrapper}>
      <Button text="logout" onPress={globalActions.logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
