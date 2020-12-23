import React from 'react';
import {View, StyleSheet} from 'react-native';
import {rem} from 'rn-units';
import Button from 'src/components/Button';
import Text from 'src/components/Text';
import Row from 'src/components/Row';
import sizes from 'src/constants/sizes';
import invitationStatuses from 'src/constants/invitationStatuses';

export default function PartySlot({user, status}) {
  return (
    <Row style={styles.wrapper}>
      <Text value={user.username} />
      <Text value={user.status} />
      {status === invitationStatuses.pending && <Button text="Cancel" />}
      {status === invitationStatuses.accepted && <Button text="Kick" />}
    </Row>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: sizes.offset,
    justifyContent: 'space-around',
  },
});
