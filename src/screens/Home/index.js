import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Screen from 'src/components/Screen';
import Text from 'src/components/Text';
import Button from 'src/components/Button';

export default () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <Text text="home.title" />
      <Button text="sign in" onPress={() => navigation.navigate('SignIn')} />
      <Button text="sign up" onPress={() => navigation.navigate('SignUp')} />
    </Screen>
  );
};
