import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {rem} from 'rn-units';
import Row from 'src/components/Row';
import Text from 'src/components/Text';
import Filters from './Filters';
import Button from 'src/components/Button';

const hardcodedGames = [
  {
    id: 'jeb1',
    name: 'Jebux',
    players: [0, 1, 3],
    limit: 4,
    map: 'Jebus Cross',
  },
];

export default function ListOfGames() {
  const [games, setGames] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    setGames(hardcodedGames);
  };

  const updateFilters = (changes) => setFilters({...filters, ...changes});

  const renderGame = ({item}) => {
    const slots = `${item.players.length}/${item.limit}`;
    return (
      <View style={styles.row}>
        <Text value={item.name} style={styles.name} />
        <Text value={item.map} style={styles.map} />
        <Text value={slots} style={styles.slots} />
        <Button text="Join" />
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Text text="List of games" />
      <FlatList data={games} renderItem={renderGame} />
      <Filters filters={filters} updateFilters={updateFilters} />
      <Row>
        <Button text="Search" />
        <Button text="Create" />
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#273F85',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingHorizontal: rem(10),
  },
  name: {
    width: rem(80),
    backgroundColor: 'yellow',
  },
  map: {
    width: rem(90),
    backgroundColor: 'yellow',
  },
  slots: {
    width: rem(90),
    backgroundColor: 'yellow',
  },
});
