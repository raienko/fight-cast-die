import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {rem} from 'rn-units';
import Text from 'src/components/Text';

export default function Achievements() {
  const achiemenets = [
    {id: 'asd1', name: 'achiv'},
    {id: 'asd2', name: 'achiv'},
    {id: 'asd3', name: 'achiv'},
    {id: 'asd4', name: 'achiv'},
  ];

  const renderAchievement = (item) => {
    return (
      <View style={styles.container} key={item.id}>
        <Text value={item.name} />
        {/*<Image*/}
        {/*  source={item.image}*/}
        {/*  resizeMode="contain"*/}
        {/*  style={styles.icon}*/}
        {/*/>*/}
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>{achiemenets.map(renderAchievement)}</View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: rem(10),
  },
  container: {
    width: rem(50),
    height: rem(50),
  },
  icon: {
    width: rem(50),
    height: rem(50),
    margin: rem(5),
  },
});
