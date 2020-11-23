import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Row from 'src/components/Row';
import Screen from 'src/components/Screen';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import TextInput from 'src/components/TextInput';
import * as characterActions from 'src/stores/character/actions';

export default () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [male, setMale] = useState('');

  const create = async () => {
    await characterActions.createCharacter({
      name,
      type,
      male,
    });
  };

  const back = () => navigation.pop();

  return (
    <Screen>
      <Text text="Character creation" />
      <TextInput value={name} placeholder="name" onChangeText={setName} />
      <TextInput value={type} placeholder="type" onChangeText={setType} />
      <TextInput value={male} placeholder="male" onChangeText={setMale} />
      <Row>
        <Button text="create" onPress={create} />
        <Button text="back" onPress={back} />
      </Row>
    </Screen>
  );
};
