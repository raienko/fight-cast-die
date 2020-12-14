import React, {useState} from 'react';
import Row from 'src/components/Row';
import navigation from 'src/navigation';
import Button from 'src/components/Button';

export default function Controls() {
  const [playing, setPlaying] = useState(false);

  const create = () => {
    setPlaying(true);
    navigation.navigate('PartySetup');
  };

  const resume = () => {
    navigation.navigate('GameSetup');
  };

  return (
    <Row>
      {
        playing
        && <Button text="Abandon" onPress={() => setPlaying(false)} />
      }
      {
        !playing && <Button text="Create" onPress={create}/>
      }
      {
        playing && <Button text="Resume" onPress={resume}/>
      }
    </Row>
  );
}
