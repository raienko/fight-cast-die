import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Logger from 'rn-units/components/Logger';
import Screen from 'src/components/Screen';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import Spinner from 'src/components/Spinner';
import Row from 'src/components/Row';
import * as storeActions from 'src/globalStore/actions';

export default () => {
  const navigation = useNavigation();
  const [fetching, setFetching] = useState(false);

  const signIn = async () => {
    setFetching(true);
    await storeActions.authWithPhoneNumber().catch((err) => {
      Logger.error('Failed to sing in: ', err.message);
      setFetching(false);
    });
  };

  return (
    <Screen>
      <Text text="home.title" />
      <Row>
        <Button text="sign in" onPress={signIn} />
        <Button text="sign up" onPress={() => navigation.navigate('SignUp')} />
      </Row>
      <Spinner visible={fetching} />
    </Screen>
  );
};
