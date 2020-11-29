import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {rem} from 'rn-units';
import Text from 'src/components/Text';

const hardcodedProfile = {
  id: 'asd',
  name: 'Doppelgander',
  rank: 12,
  win: 123,
  loose: 111,
  total: 234,
  rate: 52,
  country: 'UA',
  achievements: [],
};

export default function MyStats() {
  const [profile, setProfile] = useState(hardcodedProfile);
  return (
    <View style={styles.wrapper}>
      <View style={styles.avatar} />
      <View style={styles.cell}>
        <Text value={profile.name} style={styles.name} />
        <Text value={profile.country} style={styles.country} />
      </View>
      <View style={styles.cell}>
        <Text value={profile.rank} style={styles.rank} />
        <Text value={`${profile.rate}%`} style={styles.rate} />
      </View>
    </View>
  );
}

const size = rem(40);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rem(10),
  },
  avatar: {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: '#ccc',
  },
  cell: {
    flex: 1,
    marginLeft: rem(10),
  },
});
