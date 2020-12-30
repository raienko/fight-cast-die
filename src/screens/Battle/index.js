import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import H1 from 'src/components/H1';
import Header from 'src/components/Header';
import BackBtn from 'src/components/BackBtn';
import navigation from 'src/navigation';
import theme from 'src/constants/theme';
import levels from 'src/levels';
import Row from 'src/components/Row';
import Avatar from 'src/components/Avatar';
import StatsBox from 'src/components/StatsBox';
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
          <View style={styles.overlay}>
            <Row style={styles.stats}>
              <Row>
                <Avatar />
                <StatsBox />
              </Row>
              <Row style={{flexDirection: 'row-reverse'}}>
                <Avatar />
                <StatsBox />
              </Row>
            </Row>
          </View>
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
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  stats: {
    justifyContent: 'space-between',
  },
});
