import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CreditCard } from './CreditCard';
import { CircleThree } from './CircleThree';
import { RectDemo, DRectDemo, PointsDemo, SVGNotation, VerticesDemo, Demo } from './Polygons';

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    top: -100,
    marginHorizontal: 16,
  },
  placeholder: {
    backgroundColor: 'rgba(0,0,0,0.03)',
    borderRadius: 8,
  },
  transaction: {
    backgroundColor: 'rgba(0,0,0,0.03)',
    height: 60,
    width: '100%',
    borderRadius: 8,
    marginBottom: 8,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
});

export const Main = () => {
  return (
    <View style={styles.flex1}>
      {/*<CreditCard />*/}
      {/*<CircleThree />*/}
      <Demo />
    </View>
  );
};
