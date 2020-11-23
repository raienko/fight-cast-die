import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Screen from 'src/components/Screen';
import Spinner from 'src/components/Spinner';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import Row from 'src/components/Row';
import * as globalActions from 'src/stores/global/actions';
import * as characterActions from 'src/stores/character/actions';
import ListOfCharacters from './ListOfCharacters';

export default () => {
  const navigation = useNavigation();
  const createCharacter = () => navigation.navigate('Creation');
  const [fetching, setFetching] = useState(false);
  const [selected, setSelected] = useState(false);

  const logout = async () => {
    setFetching(true);
    await globalActions.logout().catch((err) => {
      setFetching(false);
    });
  };

  const start = () => {
    return characterActions.fetchCharacter(selected);
  };

  return (
    <Screen>
      <Text text="lobby.title" />
      <ListOfCharacters
        selected={selected}
        select={setSelected}
      />
      <Row>
        <Button text="create" onPress={createCharacter} />
        <Button text="start" onPress={start} disabled={!selected} />
        <Button text="logout" onPress={logout} />
      </Row>
      <Spinner visible={fetching} />
    </Screen>
  );
};
