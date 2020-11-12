import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import * as storeActions from 'src/globalStore/actions';

export default () => {
  const navigation = useNavigation();

  const logout = () => {
    navigation.pop();
    storeActions.logout();
  };

  return (
    <View style={styles.wrapper}>
      <Text text="settings.title" />
      <Button text="back" onPress={navigation.pop} />
      <Button text="logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
