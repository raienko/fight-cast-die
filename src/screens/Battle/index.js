import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from 'src/components/Text';

export default class Battle extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text text="battle.title" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
