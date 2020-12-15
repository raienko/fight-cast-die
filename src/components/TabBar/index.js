import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Touchable from 'rn-units/components/Touchable';
import navigation from 'src/navigation';
import Text from 'src/components/Text';
import Row from 'src/components/Row';
import {rem} from 'rn-units';

export default function TabBar({state}) {
  const renderTab = ({item, index}) => {
    const active = state.index === index;
    return (
      <Touchable
        onPress={() => navigation.navigate(item.name)}
        disabled={active}
        style={active && styles.active}
      >
        <Text value={item.name} />
      </Touchable>
    );
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={state.routes}
        renderItem={renderTab}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    minHeight: rem(30),
    padding: rem(10),
  },
  active: {
    backgroundColor: 'yellow',
  },
});
