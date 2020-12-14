import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {rem} from 'rn-units';
import PartySlot from './PartySlot';

export default function PartySlots({slots}) {
  const renderSlot = ({item}) => (
    <PartySlot
      user={item.user}
      status={item.status}
    />
  );

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={slots}
        renderItem={renderSlot}
        style={styles.list}
        bounces={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
  slot: {
    paddingHorizontal: rem(5),
    borderBottomWidth: 1,
  },
  name: {
    margin: rem(5),
    width: rem(100),
  },
  cross: {
    margin: rem(5),
  },
});
