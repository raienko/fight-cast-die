import React from 'react';
import {View, StyleSheet, FlatList, Image} from 'react-native';
import {rem} from 'rn-units';
import Touchable from 'rn-units/components/Touchable';
import Text from 'src/components/Text';

export default function Campaigns() {
  const campaigns = [
    {id: 'asd1230', text: 'Ice peak war', image: 'https://images7.alphacoders.com/301/thumb-350-301252.jpg'},
    {id: 'asd1213', text: 'Horn of Abyss', image: 'https://goodgame.ru/files/uploaded/news_5c4f786c5bf36.png'},
    {id: 'asd1243', text: 'Throne of the Lord', image: 'https://images7.alphacoders.com/301/thumb-350-301252.jpg'},
    {id: 'asd1263', text: 'Babylon', image: 'https://images7.alphacoders.com/301/thumb-350-301252.jpg'},
  ];

  const renderPromotion = ({item}) => (
    <Touchable style={[styles.container, styles.shadow]} activeOpacity={0.9}>
      <Image source={{uri: item.image}} style={styles.background} />
      <Text value={item.text} style={styles.text} />
    </Touchable>
  );

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={campaigns}
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
  },
  container: {
    width,
    height,
    borderRadius,
    backgroundColor: '#ccc',
    marginTop: rem(10),
    padding: rem(10),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    elevation: 4,
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
