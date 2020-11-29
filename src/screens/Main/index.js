import React from 'react';
import Spinner from 'src/components/Spinner';
import Wrapper from './Wrapper';
import ListOfGames from './ListOfGames';
import CurrentGame from './CurrentGame';
import MyStats from './MyStats';

export default function Main() {
  return (
    <Wrapper>
      <MyStats />
      <CurrentGame />
      <ListOfGames />
      <Spinner visible={false} />
    </Wrapper>
  );
}
