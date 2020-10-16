import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import Screen from 'src/components/Screen';

export default () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <Text text="signIn.title" />
      <Button text="login" onPress={navigation.pop} />
    </Screen>
  );
};
