import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Screen from 'src/components/Screen';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import Row from 'src/components/Row';
import globalStore from 'src/globalStore';
import * as globalActions from 'src/globalStore/actions';
import ListOfCharacters from './ListOfCharacters';

export default () => {
  const navigation = useNavigation();
  const createCharacter = () => navigation.navigate('Creation');
  const {state} = globalStore.useStore();
  return (
    <Screen>
      <Text text="lobby.title" />
      <ListOfCharacters chatacters={state.profile.characters} />
      <Row>
        <Button text="create" onPress={createCharacter} />
        <Button text="logout" onPress={globalActions.logout} />
      </Row>
    </Screen>
  );
};
