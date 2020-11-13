import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import * as globalActions from 'src/globalStore/actions';

export default function Fetching() {
  const load = async () => {
    console.log('Loading started');
    await globalActions.fetchUserProfile();
    console.log('Loading finished');
  };

  useEffect(() => {
    load();
  }, []);
  return (
    <View style={styles.wrapper}>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'red',
  },
});
