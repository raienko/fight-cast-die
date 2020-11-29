import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from 'src/components/Text';
import Button from '../../components/Button';

export default function ListOfFriends() {
  return (
    <View style={styles.wrapper}>
      <Text text="List of friends" />
      <View style={styles.row}>
        <Text text="Friend #1" />
        <Button text="Message" />
        <Button text="Invite" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
