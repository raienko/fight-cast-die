import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {rem} from 'rn-units';
import illustartion from './achievement.png';

export default function Achievements() {
  const achiemenets = [
    {id: 'asd1', name: 'john', image: illustartion},
    {id: 'asd2', name: 'john', image: illustartion},
    {id: 'asd3', name: 'john', image: illustartion},
    {id: 'asd4', name: 'john', image: illustartion},
  ];

  const renderAchievement = (item) => {
    return (
      <View style={styles.container} key={item.id}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={styles.icon}
        />
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      {achiemenets.map(renderAchievement)}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: rem(10),
  },
  icon: {
    width: rem(50),
    height: rem(50),
    margin: rem(5),
  },
});
