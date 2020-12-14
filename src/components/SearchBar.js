import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextInput from 'src/components/TextInput';
import Row from 'src/components/Row';
import Button from 'src/components/Button';
import {rem} from 'rn-units';

export default function SearchBar() {
  return (
    <Row style={styles.wrapper}>
      <TextInput />
      <Button text="Search" />
    </Row>
  );
}

const styles = StyleSheet.create({
  wrapper: {

  },
});
