import React from 'react';
import {
  Canvas,
  RoundedRect,
  DiffRect,
  rect,
  rrect,
  Points,
  vec,
  Path,
  useImage,
  Vertices,
  ImageShader,
  Group,
  Box,
  BoxShadow,
  Fill,
} from '@shopify/react-native-skia';

const RectDemo = () => {
  return (
    <Canvas style={{ flex: 1 }}>
      <RoundedRect
        x={Math.PI * 15}
        y={Math.PI * 15}
        width={256}
        height={256}
        r={25}
        color="lightblue"
      />
    </Canvas>
  );
};

const DRectDemo = () => {
  const outer = rrect(rect(Math.PI * 15, Math.PI * 15, 256, 256), 25, 25);
  const inner = rrect(rect(Math.PI * 15 + 50, Math.PI * 15 + 50, 256 - 100, 256 - 100), 50, 50);
  return (
    <Canvas style={{ flex: 1 }}>
      <DiffRect inner={inner} outer={outer} color="lightblue" />
    </Canvas>
  );
};

const PointsDemo = () => {
  const points = [
    vec(178, 50),
    vec(218, 130),
    vec(306, 143),
    vec(242, 205),
    vec(257, 294),
    vec(178, 252),
    vec(99, 294),
    vec(114, 205),
    vec(50, 143),
    vec(128, 130),
    vec(178, 50),
  ];
  return (
    <Canvas style={{ flex: 1 }}>
      <Points points={points} mode="polygon" color="lightblue" style="stroke" strokeWidth={4} />
    </Canvas>
  );
};

const SVGNotation = () => {
  return (
    <Canvas style={{ flex: 1 }}>
      <Path
        path="M 178 50 L 218 130 L 306 143 L 242 205 L 257 294 L 178 252 L 99 294 L 114 205 L 50 143 L 138 130 L 178 50 Z"
        color="lightblue"
      />
    </Canvas>
  );
};

const VerticesDemo = () => {
  const image = useImage(require('./assets/img.png'));
  const vertices = [vec(114, 50), vec(178, 306), vec(50, 306)];
  const colors = ['#61dafb', '#fb61da', '#dafb61'];
  if (!image) {
    return null;
  }
  return (
    <Canvas style={{ flex: 1 }}>
      <Group>
        <ImageShader image={image} tx="repeat" ty="repeat" />
        <Vertices vertices={vertices} colors={colors} />
      </Group>
    </Canvas>
  );
};

const Demo = () => (
  <Canvas style={{ left: 50, top: 50, width: 256, height: 256 }}>
    <Fill color="#add8e6" />
    <Box box={rrect(rect(64, 64, 128, 128), 24, 24)} color="#add8e6">
      <BoxShadow dx={10} dy={10} blur={10} color="#93b8c4" inner />
      <BoxShadow dx={-10} dy={-10} blur={10} color="#c7f8ff" inner />
      <BoxShadow dx={10} dy={10} blur={10} color="#93b8c4" />
      <BoxShadow dx={-10} dy={-10} blur={10} color="#c7f8ff" />
    </Box>
  </Canvas>
);

export { RectDemo, DRectDemo, PointsDemo, SVGNotation, VerticesDemo, Demo };
