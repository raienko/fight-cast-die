import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import H1 from 'src/components/H1';
import Header from 'src/components/Header';
import BackBtn from 'src/components/BackBtn';
import navigation from 'src/navigation';
import theme from 'src/constants/theme';
import levels from 'src/levels';
import {rem} from 'rn-units';

export default class Battle extends React.Component {
  render() {
    const level = levels.forest_1;
    return (
      <View style={styles.wrapper}>
        <Header>
          <BackBtn onPress={() => navigation.back()} />
          <H1 text="battle.title" />
        </Header>
        <View style={styles.container}>
          <Image
            source={level.battlefield}
            style={styles.background}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.black,
  },
  background: {
    width: rem(380),
    height: rem(600),
  },
});
