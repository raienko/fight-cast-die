import React from 'react';
import {View, StyleSheet} from 'react-native';
import {rem} from 'rn-units';
import PropTypes from 'prop-types';
import theme from 'src/constants/theme';

export default class StatsBox extends React.PureComponent {
  static propTypes = {
    hp: PropTypes.number,
    maxHp: PropTypes.number,
    mp: PropTypes.number,
    maxMp: PropTypes.number,
    sp: PropTypes.number,
    maxSp: PropTypes.number,
  };

  static defaultProps = {
    hp: 3,
    maxHp: 10,
    mp: 6,
    maxMp: 10,
    sp: 9,
    maxSp: 10,
  };

  render() {
    const {
      hp, maxHp,
      mp, maxMp,
      sp, maxSp,
    } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={[styles.bar, styles.hp, {width: `${hp / maxHp * 100}%`}]} />
        <View style={[styles.bar, styles.mp, {width: `${mp / maxMp * 100}%`}]} />
        <View style={[styles.bar, styles.sp, {width: `${sp / maxSp * 100}%`}]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: rem(90),
  },
  bar: {
    height: rem(10),
    borderWidth: 1,
  },
  hp: {
    backgroundColor: theme.red,
  },
  mp: {
    backgroundColor: theme.blue,
  },
  sp: {
    backgroundColor: theme.green,
  },
});
