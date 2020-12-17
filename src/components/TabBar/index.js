import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Touchable from 'rn-units/components/Touchable';
import navigation from 'src/navigation';
import Row from 'src/components/Row';
import Icon from 'src/components/Icon';
import {rem} from 'rn-units';
import theme from 'src/constants/theme';

const icons = {
  Friends: {name: 'comment-o'},
  Storyline: {name: 'bookmark-o'},
  Arena: {name: 'flag-o'},
  Settings: {name: 'check-square-o'},
};

export default function TabBar({state}) {
  const renderTab = (item, index) => {
    const active = state.index === index;
    return (
      <Touchable
        onPress={() => navigation.navigate(item.name)}
        disabled={active}
        key={item.name}
        style={[styles.tab, active && styles.tabActive]}>
        <Icon
          {...icons[item.name]}
          style={[styles.icon, active && styles.active]}
          size={rem(active ? 25 : 20)}
        />
      </Touchable>
    );
  };

  return (
    <SafeAreaView edges="bottom" style={styles.wrapper}>
      <Row style={styles.container}>
        {
          state.routes.map(renderTab)
        }
      </Row>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    borderRadius: rem(10),
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    overflow: 'hidden',
    marginHorizontal: rem(20),
    marginVertical: rem(10),
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: rem(45),
    borderRadius: rem(10),
  },
  tabActive: {
    // backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  icon: {
    color: theme.accent2,
  },
  active: {
    // color: theme.accent3,
  },
});
