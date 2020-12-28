import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {rem} from 'rn-units';
import Touchable from 'rn-units/components/Touchable';
import Text from 'src/components/Text';
import * as gameActions from 'src/store/game/actions';

export default function Campaigns() {
  const campaigns = [
    {
      id: 'asd1230',
      text: 'Ice peak war',
      image: 'https://images7.alphacoders.com/301/thumb-350-301252.jpg',
    },
    {
      id: 'asd1213',
      text: 'Horn of Abyss',
      image: 'https://goodgame.ru/files/uploaded/news_5c4f786c5bf36.png',
    },
    {
      id: 'asd1243',
      text: 'Frozen Throne',
      image:
        'https://www.desktophut.ru/wp-content/uploads/2018/03/Knights_of_the_Frozen_Throne.jpg',
    },
    {
      id: 'asd1263',
      text: 'Babylon',
      image:
        'https://i.pinimg.com/originals/67/ff/c2/67ffc24441837dfed36bc1eb7698483f.jpg',
    },
  ];

  const renderCampaign = ({item}) => (
    <Touchable
      style={styles.container}
      activeOpacity={0.9}
      onPress={gameActions.createGame}>
      {/*<Image source={{uri: item.image}} style={styles.background} />*/}
      <Text value={item.text} style={styles.text} />
    </Touchable>
  );

  return (
    <View style={styles.wrapper}>
      <FlatList data={campaigns} renderItem={renderCampaign} />
    </View>
  );
}

const height = rem(120);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#eee',
  },
  container: {
    flex: 1,
    height,
    borderRadius: rem(5),
    padding: rem(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a0bbe0',
    marginHorizontal: rem(5),
    marginTop: rem(5),
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  text: {
    padding: rem(10),
    backgroundColor: '#000',
    color: '#fff',
  },
});
