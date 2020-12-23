import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {rem} from 'rn-units';
import Text from 'src/components/Text';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const hardcodedProfile = {
  id: 'asd',
  name: 'Doppelgander',
  avatar:
    'https://mafii.net/uploads/avatars//full/17Oct2016_08-39-24sand_ro.png',
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
      <View style={styles.container}>
        <Image style={styles.avatar} source={{uri: profile.avatar}} />
        <View style={styles.cell}>
          <Text value={profile.name} style={styles.name} />
          <Text value={profile.country} style={styles.country} />
        </View>
        <View style={styles.cell}>
          <Text value={profile.rank} style={styles.rank} />
          <Text value={`${profile.rate}%`} style={styles.rate} />
        </View>
      </View>
    </View>
  );
}

const size = rem(40);

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rem(10),
    paddingVertical: rem(10),
  },
  avatar: {
    width: size,
    height: size,
    backgroundColor: '#ccc',
  },
  cell: {
    flex: 1,
    marginLeft: rem(10),
  },
});
