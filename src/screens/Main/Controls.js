import React from 'react';
import {StyleSheet} from 'react-native';
import Row from 'src/components/Row';
import Button from 'src/components/Button';
import statuses from 'src/constants/statuses';

export default function Controls({status, setStatus}) {
  const search = () => {
    setStatus(statuses.searching);
  };

  const create = () => {
    setStatus(statuses.playing);
  };

  const cancel = () => {
    setStatus(statuses.online);
  };

  const abandon = () => {
    setStatus(statuses.online);
  };

  const resume = () => {
    setStatus(statuses.playing);
  };

  return (
    <Row style={styles.wrapper}>
      {
        status === statuses.online && <>
          <Button text="search" onPress={search} />
          <Button text="create" onPress={create} />
        </>
      }
      {
        status === statuses.searching && <>
          <Button text="cancel" onPress={cancel} />
        </>
      }
      {
        status === statuses.playing && <>
          <Button text="abandon" onPress={abandon} />
          <Button text="resume" onPress={resume} />
        </>
      }
    </Row>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
  },
});
