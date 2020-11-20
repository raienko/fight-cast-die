import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Row from 'src/components/Row';
import Screen from 'src/components/Screen';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import TextInput from 'src/components/TextInput';
import * as storeActions from 'src/stores/global/actions';

export default () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <Text text="Character creation" />
      <TextInput placeholder="name" />
      <TextInput placeholder="class" />
      <TextInput placeholder="male" />
      <Row>
        <Button text="create" onPress={() => navigation.pop()} />
        <Button text="back" onPress={() => navigation.pop()} />
      </Row>
    </Screen>
  );
};
