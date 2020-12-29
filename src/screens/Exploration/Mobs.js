import React from 'react';
import mobs from 'src/mobs';
import navigation from 'src/navigation';
import Character from 'src/components/Character';
import {cellSize} from 'src/constants';

export default function Mobs({mobsmap}) {
  return mobsmap.map((mob) => (
    <Character
      key={mob.id}
      scale={mobs[mob.type].size}
      source={mobs[mob.type].tile}
      position={{x: mob.x * cellSize, y: mob.y * cellSize}}
      onPress={() => navigation.navigate('Battle')}
    />
  ));
}
