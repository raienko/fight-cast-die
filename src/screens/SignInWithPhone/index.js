import React from 'react';
import navigation from 'src/navigation';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import Screen from 'src/components/Screen';
import * as authActions from 'src/store/auth/actions';

export default () => {
  return (
    <Screen>
      <Text text="sign_in_with_phone.title" />
      <Button text="button.back" onPress={navigation.back} />
      <Button text="button.sign_in" onPress={authActions.auth} />
    </Screen>
  );
};
