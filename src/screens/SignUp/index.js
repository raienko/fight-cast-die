import React from 'react';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import Screen from 'src/components/Screen';
import navigation from 'src/navigation';

export default () => {
  return (
    <Screen>
      <Text text="signup.title" />
      <Button text="button.back" onPress={navigation.back} />
      <Button text="button.signup" onPress={navigation.back} />
    </Screen>
  );
};
