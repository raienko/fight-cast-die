import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {rem} from 'rn-units';
import Touchable from 'rn-units/components/Touchable';
import Button from 'src/components/Button';
import TownPortrait from 'src/components/TownPortrait';
import WarBanner from 'src/components/WarBanner';
import Row from 'src/components/Row';
import Text from 'src/components/Text';
import colors from 'src/constants/colors';
import StartingBonus from './StartingBonus';

const order = [
  colors.red,
  colors.blue,
  colors.tan,
  colors.green,
  colors.orange,
  colors.purple,
  colors.teal,
  colors.pink,
];

const bonuses = {
  gold: 'gold',
  artifact: 'artifact',
  resources: 'resources',
};

export default function Slots() {
  const [slots, setSlots] = useState([]);

  const addSlot = (user) => {
    const list = slots.concat({
      ...user,
      color: order[slots.length],
    });

    setSlots(list);
  };

  const clearSlot = (id) => {
    const clearedList = slots.filter(i => i.id !== id);
    setSlots(clearedList);
  };

  const start = () => {
    addSlot({
      name: 'Current User',
      id: 'xx1',
    });
  };

  useEffect(start, []);

  const showAddPlayerPopup = () => {
    addSlot({
      name: Date.now(),
      id: Date.now(),
    });
  };

  const renderSlot = ({item, index}) => {
    const bonus = bonuses[item.bonus];
    return (
      <Row style={styles.slot}>
        <Touchable>
          <WarBanner color={item.color} />
        </Touchable>
        <View>
          <Text value={item.name} style={styles.name} />
        </View>
        <Touchable>
          <TownPortrait town={item.town} />
        </Touchable>
        <Touchable>
          <StartingBonus />
        </Touchable>
        {
          index > 0
          && <Button text="Remove" onPress={() => clearSlot(item.id)} />
        }
      </Row>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Text text="Players setup" />
      <FlatList
        data={slots}
        renderItem={renderSlot}
        style={styles.list}
      />
      <Button
        text="Add"
        onPress={showAddPlayerPopup}
        disabled={slots.length === order.length}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
  slot: {
    padding: rem(10),
    borderBottomWidth: 1,
  },
  name: {
    margin: rem(10),
  },
});
