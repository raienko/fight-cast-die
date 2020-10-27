import React, {useEffect} from 'react';
import {wait, seconds} from 'rn-units';
import {useLoading} from './Loading';
import {useLevel} from './Level';

const Controller = () => {
  const {hideLoading} = useLoading();
  const {changeLevel} = useLevel();

  useEffect(() => {
    start();
  }, []);

  const start = async () => {
    changeLevel('forest_1');
    await wait(seconds(4));
    hideLoading();
  };

  return null;
};

export default Controller;
