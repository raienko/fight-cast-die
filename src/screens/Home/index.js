import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logger from 'rn-units/components/Logger';
import Screen from 'src/components/Screen';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Spinner from 'src/components/Spinner';
import * as storeActions from 'src/stores/global/actions';

export default () => {
  const navigation = useNavigation();
  const [fetching, setFetching] = useState(false);

  const signIn = async () => {
    setFetching(true);
    await storeActions.authWithPhoneNumber().catch((err) => {
      Logger.error('Failed to sing in: ', err.message);
      const needsToFinishSignup = true;
      setFetching(false);
      if (needsToFinishSignup) {
        signUp();
      }
    });
  };

  const signUp = async () => {
    navigation.navigate('SignUp');
  };

  return (
    <Screen>
      <View style={styles.wrapper}>
        <Text text="Fight Cast Die" />
        <Button text="Phone number" onPress={signIn} />
        <Button text="Facebook" onPress={signIn} />
        <Button text="Game Center" onPress={signIn} />
        <Button text="Apple Id" onPress={signIn} />
        <Button text="Google Play" onPress={signIn} />
        <Footer />
      </View>
      <Spinner visible={fetching} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
