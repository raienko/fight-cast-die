import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Screen from 'src/components/Screen';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import * as storeActions from 'src/globalStore/actions';

export default () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <Text text="Character creation" />
      <Button text="back" onPress={() => navigation.pop()} />
    </Screen>
  );
};
