import React from 'react';
import {StyleSheet} from 'react-native';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import Screen from 'src/components/Screen';
import navigation from 'src/navigation';
import * as authActions from 'src/store/auth/actions';

export default () => {
  return (
    <Screen style={styles.wrapper}>
      <Text text="signup.title" />
      <Button text="button.back" onPress={navigation.back} />
      <Button text="button.sign_up" onPress={() => authActions.auth()} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'flex-end',
  },
});
