import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {rem} from 'rn-units';

export default function Achievements() {
  const achiemenets = [
    {id: 'asd1', name: 'john', image: 'https://lh3.googleusercontent.com/proxy/HpE33HC0n1RQiFh5rEFHdDQ95erewMIlg3sceEniuFri5q7DzR74aR0bUF-RS9YHdLkWeYxogYl0uKXHvVF2er2HJKSMmZSlRA8'},
    {id: 'asd2', name: 'john', image: 'https://lh3.googleusercontent.com/proxy/HpE33HC0n1RQiFh5rEFHdDQ95erewMIlg3sceEniuFri5q7DzR74aR0bUF-RS9YHdLkWeYxogYl0uKXHvVF2er2HJKSMmZSlRA8'},
    {id: 'asd3', name: 'john', image: 'https://lh3.googleusercontent.com/proxy/HpE33HC0n1RQiFh5rEFHdDQ95erewMIlg3sceEniuFri5q7DzR74aR0bUF-RS9YHdLkWeYxogYl0uKXHvVF2er2HJKSMmZSlRA8'},
    {id: 'asd4', name: 'john', image: 'https://lh3.googleusercontent.com/proxy/HpE33HC0n1RQiFh5rEFHdDQ95erewMIlg3sceEniuFri5q7DzR74aR0bUF-RS9YHdLkWeYxogYl0uKXHvVF2er2HJKSMmZSlRA8'},
  ];

  const renderAchievement = (item) => {
    return (
      <View style={styles.container} key={item.id}>
        <Image source={{uri: item.image}} resizeMode="contain" style={styles.icon} />
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
