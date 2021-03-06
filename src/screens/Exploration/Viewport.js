import React, {useRef, useState, useContext} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

const ViewportContext = React.createContext();

export const useViewport = () => useContext(ViewportContext);

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
    <ViewportContext.Provider value={{moveCamera, toggleScroll}}>
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
    </ViewportContext.Provider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#000',
  },
});
