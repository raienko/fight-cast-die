import React from 'react';
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
    <Screen>
      <Text text="login.title" />
      <Button text="login.sign_in_with_phone" onPress={signInWithPhone} />
      <Button text="login.sign_up" onPress={signUp} />
      <Footer />
    </Screen>
  );
}
