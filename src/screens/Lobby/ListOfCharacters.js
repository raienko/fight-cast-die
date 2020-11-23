import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {rem} from 'rn-units';
import characterStore from 'src/stores/character';
import * as characterActions from 'src/stores/character/actions';
import Touchable from 'rn-units/components/Touchable';
import Character from './Character';

export default function ListOfCharacters({select, selected}) {
  const [characters, setCharacters] = useState([]);
  const {state: characterState} = characterStore.useStore();

  const load = async () => {
    const ids = characterState.characters;
    const data = await characterActions.getCharacters(ids);
    setCharacters(data);
  };

  const renderCharacter = ({item}) => {
    const active = selected === item.id;
    return (
      <Touchable onPress={() => select(item.id)} style={active && styles.active}>
        <Character character={item} />
      </Touchable>
    );
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={characters}
        renderItem={renderCharacter}
        keyExtractor={(i) => `${i.id}`}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    width: '100%',
    borderRadius: rem(5),
    backgroundColor: '#ddd',
  },
  active: {
    backgroundColor: '#ceffb5',
  },
});
