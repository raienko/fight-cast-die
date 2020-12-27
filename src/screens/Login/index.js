import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as authActions from 'src/store/auth/actions';
import navigation from 'src/navigation';
import Screen from 'src/components/Screen';
import H1 from 'src/components/H1';
import Button from 'src/components/Button';
import Footer from 'src/components/Footer';
import SettingsBtn from 'src/components/SettingsBtn';
import Header from 'src/components/Header';

export default function Login() {
  const signIn = async () => {
    authActions.auth();
  };

  const signUp = async () => {
    authActions.auth();
  };

  return (
    <Screen>
      <Header>
        <H1 text="app_name" />
        <SettingsBtn onPress={() => navigation.navigate('Settings')} />
      </Header>
      <View style={styles.container}>
        <Button text="button.sign_in" onPress={signIn} />
        <Button text="button.sign_up" onPress={signUp} />
      </View>
      <Footer />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
