import React from 'react';
import {ScrollView} from 'react-native';

export default ({children}) => {
  return (
    <ScrollView bounces={false}>
      <ScrollView bounces={false} horizontal>
        {children}
      </ScrollView>
    </ScrollView>
  );
};
