import React, {useState} from 'react';
import Spinner from 'src/components/Spinner';
import Wrapper from './Wrapper';
import MyStats from './MyStats';
import Controls from './Controls';
import Invitations from './Invitations';
import Promotions from './Promotions';
import statuses from 'src/constants/statuses';

export default function Main() {
  const [status, setStatus] = useState(statuses.online);

  return (
    <Wrapper>
      <MyStats />
      <Promotions />
      <Invitations status={status} />
      <Controls status={status} setStatus={setStatus} />
      <Spinner visible={false} />
    </Wrapper>
  );
}
