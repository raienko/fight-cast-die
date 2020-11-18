import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Screen from 'src/components/Screen';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import globalStore from 'src/globalStore';
import ListOfCharacters from './ListOfCharacters';

export default () => {
  const navigation = useNavigation();
  const createCharacter = () => navigation.navigate('Creation');
  const {state} = globalStore.useStore();
  return (
    <Screen>
      <Text text="lobby.title" />
      <ListOfCharacters chatacters={state.profile.characters} />
      <Button text="create" onPress={createCharacter} />
    </Screen>
  );
};
