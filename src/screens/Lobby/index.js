import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Screen from 'src/components/Screen';
import Spinner from 'src/components/Spinner';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import Row from 'src/components/Row';
import globalStore from 'src/globalStore';
import * as globalActions from 'src/globalStore/actions';
import ListOfCharacters from './ListOfCharacters';

export default () => {
  const navigation = useNavigation();
  const createCharacter = () => navigation.navigate('Creation');
  const [fetching, setFetching] = useState(false);
  const {state} = globalStore.useStore();

  const logout = async () => {
    setFetching(true);
    await globalActions.logout().catch((err) => {
      setFetching(false);
    });
  };

  return (
    <Screen>
      <Text text="lobby.title" />
      <ListOfCharacters chatacters={state.profile.characters} />
      <Row>
        <Button text="create" onPress={createCharacter} />
        <Button text="logout" onPress={logout} />
      </Row>
      <Spinner visible={fetching} />
    </Screen>
  );
};
