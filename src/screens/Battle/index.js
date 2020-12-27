import React from 'react';
import {View, StyleSheet} from 'react-native';
import H1 from 'src/components/H1';
import Header from 'src/components/Header';
import BackBtn from 'src/components/BackBtn';
import navigation from 'src/navigation';

export default class Battle extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Header>
          <BackBtn onPress={() => navigation.back()} />
          <H1 text="battle.title" />
        </Header>
        <View style={styles.container}>

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
  }
});
