import React from 'react';
import {View, StyleSheet, FlatList, Image} from 'react-native';
import {rem} from 'rn-units';
import Touchable from 'rn-units/components/Touchable';
import Text from 'src/components/Text';

export default function Promotions() {
  const promotions = [
    {id: 'asd1230', text: 'Promo 1', image: 'https://images7.alphacoders.com/301/thumb-350-301252.jpg'},
    {id: 'asd1213', text: 'Promo 2', image: 'https://images7.alphacoders.com/301/thumb-350-301252.jpg'},
  ];

  const renderPromotion = ({item}) => (
    <Touchable style={styles.promo} activeOpacity={0.9}>
      <Image source={{uri: item.image}} style={styles.background} />
      <Text value={item.text} style={styles.text} />
    </Touchable>
  );

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={promotions}
        renderItem={renderPromotion}
      />
    </View>
  );
}

const width = rem(365);
const height = rem(120);
const borderRadius = rem(10);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  promo: {
    width,
    height,
    borderRadius,
    backgroundColor: '#ccc',
    marginTop: rem(10),
    padding: rem(10),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width,
    height,
    borderRadius,
  },
  text: {
    padding: rem(10),
    backgroundColor: '#000',
    color: '#fff',
  },
});
