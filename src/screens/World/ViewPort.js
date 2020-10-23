import React, {useRef, useState, useEffect} from 'react';
import {ScrollView} from 'react-native';

export default ({children}) => {
  const horizontalPlane = useRef();
  const verticalPlane = useRef();
  const [scrollable, setScrollable] = useState(false);

  const moveCamera = (x, y) => {
    horizontalPlane.current.scrollTo({x});
    verticalPlane.current.scrollTo({y});
  };

  const toggleScroll = (value) => setScrollable(value);

  useEffect(() => {
    setTimeout(() => {
      moveCamera(300, 500);
      toggleScroll(true);
    }, 3000);
  }, []);

  return (
    <ScrollView
      bounces={false}
      ref={verticalPlane}
      scrollEnabled={scrollable}
      showsVerticalScrollIndicator={false}>
      <ScrollView
        horizontal
        bounces={false}
        ref={horizontalPlane}
        scrollEnabled={scrollable}
        showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </ScrollView>
  );
};
