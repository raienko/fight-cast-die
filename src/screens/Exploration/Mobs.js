import React from 'react';
import mobs from 'src/mobs';
import navigation from 'src/navigation';
import Tile from './Tile';

export default function Mobs({mobsmap}) {
  return mobsmap.map((mob) => (
    <Tile
      key={mob.id}
      size={mobs[mob.type].size}
      source={mobs[mob.type].tile}
      position={{x: mob.x, y: mob.y}}
      onPress={() => navigation.navigate('Battle')}
    />
  ));
}
