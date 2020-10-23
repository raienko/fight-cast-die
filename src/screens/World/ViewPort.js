import React, {useRef} from 'react';
import {ScrollView} from 'react-native';

export default ({children}) => {
  const horizontalPlane = useRef();
  const verticalPlane = useRef();

  const moveCamera = (x, y) => {
    horizontalPlane.current.scrollTo({x});
    verticalPlane.current.scrollTo({y});
  };

  return (
    <ScrollView
      bounces={false}
      ref={verticalPlane}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
    >
      <ScrollView
        horizontal
        bounces={false}
        ref={horizontalPlane}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </ScrollView>
  );
};
