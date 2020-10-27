import React, {useState, useEffect, useContext} from 'react';
import {useLoading} from './Loading';
import {useLevel} from './Level';

const Controller = ({children}) => {
  const {showLoading, hideLoading} = useLoading();
  const {changeLevel} = useLevel();

  useEffect(() => {
    start();
  }, []);

  const start = async () => {
    changeLevel('forest_1');
    hideLoading();
  };

  return null;
};

export default Controller;
