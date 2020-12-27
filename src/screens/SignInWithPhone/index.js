import React from 'react';
import {StyleSheet} from 'react-native';
import navigation from 'src/navigation';
import Button from 'src/components/Button';
import Screen from 'src/components/Screen';
import * as authActions from 'src/store/auth/actions';

export default () => {
  return (
    <Screen style={styles.wrapper}>
      <Button text="button.back" onPress={navigation.back} />
      <Button text="button.sign_in" onPress={authActions.auth} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'flex-end',
  },
});
