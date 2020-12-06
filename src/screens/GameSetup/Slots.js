import React from 'react';
import {View, StyleSheet, FlatList, Image} from 'react-native';
import {rem} from 'rn-units';
import Touchable from 'rn-units/components/Touchable';
import TownPortrait from 'src/components/TownPortrait';
import WarBanner from 'src/components/WarBanner';
import Row from 'src/components/Row';
import Text from 'src/components/Text';

const bonuses = {
  gold: 'gold',
  artifact: 'artifact',
  resources: 'resources',
};

export default function Slots() {
  const slots = [{}, {}, {}, {}, {}, {}];
  const flag = undefined;
  const renderSlot = ({item}) => {
    const bonus = bonuses[item.bonus];
    return (
      <Row style={styles.slot}>
        <Touchable>
          <WarBanner color={item.color} />
        </Touchable>
        <View>
          <Text value={item.name} />
        </View>
        <Touchable>
          <TownPortrait town={item.town} />
        </Touchable>
        <Touchable>
          <Image source={bonus} style={styles.bonus} />
        </Touchable>
      </Row>
    );
  };
  return (
    <View style={styles.wrapper}>
      <Text text="Players setup" />
      <Row style>

      </Row>
      <FlatList data={slots} renderItem={renderSlot} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
  },
  slot: {
    padding: rem(10),
    borderBottomWidth: 1,
  },
});
