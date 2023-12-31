import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CornerDraggable } from '../../components/cornerDraggable';
import { CodeBox } from '../../components/codeBox';

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  padding: 2em;
  width: calc(100% - 4em);
`;

const Box = styled.div<{ radius: string }>`
  width: 50vmin;
  height: 50vmin;
  background-color: ${(props) => props.theme.colors.primary500};
  position: relative;
  border-radius: ${(props) => props.radius};
  margin: auto;

  @media (max-width: 1200px) {
    width: 60vmin;
    height: 60vmin;
  }
`;

const BoxBorder = styled.div`
  position: absolute;
  width: 50vmin;
  height: 50vmin;
  background-color: transparent;
  border: 2px dotted ${(props) => props.theme.colors.secondary900};
  top: -2px;
  left: -2px;

  @media (max-width: 1200px) {
    width: 60vmin;
    height: 60vmin;
  }
`;

function BorderRadius() {
  const [corner1, setCorner1] = useState(25);
  const [corner2, setCorner2] = useState(12);
  const [corner3, setCorner3] = useState(33);
  const [corner4, setCorner4] = useState(71);
  const [borderRadius, setBorderRadius] = useState('');

  const toFloat = (value: number) => parseFloat(value.toString()).toFixed(1);

  useEffect(() => {
    const string = `${toFloat(corner4)}% ${toFloat(100 - corner4)}% ${toFloat(100 - corner2)}% ${toFloat(corner2)}%/ ${toFloat(corner1)}% ${toFloat(corner3)}% ${toFloat(100 - corner3)}% ${toFloat(100 - corner1)}%`;
    setBorderRadius(string);
  }, [corner1, corner2, corner3, corner4]);

  return (
    <Container>
      <Box radius={borderRadius} id="box">
        <BoxBorder />
        <CornerDraggable
          horizontal={false}
          initTop={corner1}
          initLeft={0}
          handleChangeValue={(val: number) => {
            setCorner1(val);
          }}
        />
        <CornerDraggable
          horizontal
          initTop={100}
          initLeft={corner2}
          handleChangeValue={(val: number) => {
            setCorner2(val);
          }}
        />
        <CornerDraggable
          horizontal={false}
          initTop={corner3}
          initLeft={100}
          handleChangeValue={(val: number) => {
            setCorner3(val);
          }}
        />
        <CornerDraggable
          horizontal
          initTop={0}
          initLeft={corner4}
          handleChangeValue={(val: number) => {
            setCorner4(val);
          }}
        />
      </Box>
      <CodeBox text={`border-radius: ${borderRadius}`} multiLine={false} />
    </Container>
  );
}

export default BorderRadius;
