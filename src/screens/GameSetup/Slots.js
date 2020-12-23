import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {rem} from 'rn-units';
import Touchable from 'rn-units/components/Touchable';
import Button from 'src/components/Button';
import TownPortrait from 'src/components/TownPortrait';
import HeroPortrait from 'src/components/HeroPortrait';
import WarBanner from 'src/components/WarBanner';
import Row from 'src/components/Row';
import Text from 'src/components/Text';
import Icon from 'src/components/Icon';
import StartingBonus from './StartingBonus';
import order from 'src/constants/order';

const fakeUser = {
  name: 'Current User',
  id: 'xx1',
  hero: 'luna',
  town: 'castle',
};

export default function Slots() {
  const [slots, setSlots] = useState([]);

  const addSlot = (user) => {
    const list = slots.concat({
      ...fakeUser,
      ...user,
      color: order[slots.length],
    });

    setSlots(list);
  };

  const clearSlot = (id) => {
    const clearedList = slots.filter((i) => i.id !== id);
    setSlots(clearedList);
  };

  const start = () => {
    addSlot(fakeUser);
  };

  useEffect(start, []);

  const showAddPlayerPopup = () => {
    addSlot({
      name: Date.now(),
      id: `${Date.now()}`,
    });
  };

  const renderSlot = ({item, index}) => {
    return (
      <Row style={[styles.slot, {backgroundColor: item.color}]}>
        <Touchable>
          <WarBanner color={item.color} />
        </Touchable>
        <Touchable>
          <Text value={item.name} style={styles.name} numberOfLines={2} />
        </Touchable>
        <Touchable>
          <TownPortrait town={item.town} />
        </Touchable>
        <Touchable>
          <HeroPortrait hero={item.hero} />
        </Touchable>
        <Touchable>
          <StartingBonus />
        </Touchable>
        {index > 0 && (
          <Touchable onPress={() => clearSlot(item.id)}>
            <Icon name="times" style={styles.cross} color="red" />
          </Touchable>
        )}
      </Row>
    );
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={slots}
        renderItem={renderSlot}
        style={styles.list}
        bounces={false}
      />
      {slots.length < order.length && (
        <Button
          text="Add"
          onPress={showAddPlayerPopup}
          disabled={slots.length === order.length}
        />
      )}
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
