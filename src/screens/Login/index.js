import React from 'react';
import {StyleSheet} from 'react-native';
import navigation from 'src/navigation';
import Screen from 'src/components/Screen';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import Footer from 'src/components/Footer';

export default function Login() {
  const signInWithPhone = async () => {
    navigation.navigate('SignInWithPhone');
  };

  const signUp = async () => {
    navigation.navigate('SignUp');
  };

  return (
    <Screen style={styles.wrapper}>
      <Text text="app_name" />
      <Button text="button.use_phone_number" onPress={signInWithPhone} />
      <Button text="button.sign_up" onPress={signUp} />
      <Footer />
    </Screen>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'flex-end',
  },
});
