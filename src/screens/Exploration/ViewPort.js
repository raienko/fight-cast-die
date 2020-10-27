import React, {useRef, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

export default ({children}) => {
  const horizontalPlane = useRef();
  const verticalPlane = useRef();
  const [scrollable, setScrollable] = useState(true);

  const moveCamera = (x, y) => {
    horizontalPlane.current.scrollTo({x});
    verticalPlane.current.scrollTo({y});
  };

  const toggleScroll = (value) => setScrollable(value);

  return (
    <View style={styles.wrapper}>
      <ScrollView
        bounces={false}
        ref={verticalPlane}
        removeClippedSubviews
        scrollEnabled={scrollable}
        showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          bounces={false}
          ref={horizontalPlane}
          removeClippedSubviews
          scrollEnabled={scrollable}
          showsHorizontalScrollIndicator={false}>
          {children}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#000',
  },
});
