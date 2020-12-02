import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import Row from 'src/components/Row';
import {rem} from 'rn-units';
import statuses from '../../constants/statuses';

export default function Invitations({status}) {
  const invitations = [
    {
      id: 'hasd123',
      from: 12,
      to: 13,
      slots: 1,
      maxSlots: 2,
      map: 'JC',
    },
    {
      id: 'hasd1223',
      from: 12,
      to: 13,
      slots: 1,
      maxSlots: 2,
      map: 'JC',
    },
    {
      id: 'hasd11223',
      from: 12,
      to: 13,
      slots: 1,
      maxSlots: 2,
      map: 'JC',
    },
    {
      id: 'haasd1223',
      from: 12,
      to: 13,
      slots: 1,
      maxSlots: 2,
      map: 'JC',
    },
  ];

  const renderInvitation = ({item}) => (
    <Row style={styles.invitation}>
      <Text style={styles.cell} value={item.from} />
      <Text style={styles.cell} value={item.to} />
      <Text style={styles.cell} value={`${item.slots}/${item.maxSlots}`} />
      <View>
        <Button text="decline" disabled={status === statuses.playing} />
        <Button text="accept" disabled={status === statuses.playing} />
      </View>
    </Row>
  );

  return (
    <View style={styles.wrapper}>
      <Text text="List of invitations" style={styles.title} />
      <View style={styles.row}>
        <Text style={styles.cell} text="From" />
        <Text style={styles.cell} text="To" />
        <Text style={styles.cell} text="Slots" />
        <Text style={styles.cell} text="Actions" />
      </View>
      <FlatList
        data={invitations}
        renderItem={renderInvitation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  cell: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  invitation: {
    paddingHorizontal: rem(10),
    backgroundColor: '#ddd',
    marginBottom: rem(5),
  },
});
