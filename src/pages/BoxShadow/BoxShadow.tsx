import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CodeBox } from '../../components/codeBox';
import CustomRange from '../../components/customRange';

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

  @media (max-width: 1200px) {
    position: initial;
    transform: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5em;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

const Box = styled.div<{ boxShadow: string }>`
  width: 50vmin;
  height: 50vmin;
  background-color: ${(props) => props.theme.colors.primary500};
  position: relative;
  margin: auto 0;
  box-shadow: ${(props) => props.boxShadow};
  border-radius: 1em;

  @media (max-width: 1200px) {
    width: 60vmin;
    height: 60vmin;
  }
`;

const Text = styled.span`
  font-size: 14px;
`;

const Style = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary700};
`;

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

const Input = styled.input`
  max-width: 300px;
  min-width: 250px;
`;

function BoxShadow() {
  const [horizontalOffset, setHorizontalOffset] = useState(10);
  const [verticallOffset, setVerticallOffset] = useState(30);
  const [blur, setBlur] = useState(30);
  const [spreadRadius, setSpreadRadius] = useState(22);
  const [opacity, setOpacity] = useState(0.3);
  const [shadowColor, setShadowColor] = useState('#000000');
  const [boxShadow, setBoxShadow] = useState('');

  useEffect(() => {
    const r = parseInt(shadowColor.slice(1, 3), 16);
    const g = parseInt(shadowColor.slice(3, 5), 16);
    const b = parseInt(shadowColor.slice(5, 7), 16);
    setBoxShadow(
      `rgba(${r}, ${g}, ${b}, ${opacity}) ${horizontalOffset}px ${verticallOffset}px ${blur}px ${spreadRadius}px;`
    );
  }, [horizontalOffset, verticallOffset, blur, spreadRadius, opacity, shadowColor]);

  return (
    <Container>
      <Wrapper>
        <Styles>
          <Style>
            <Text>Horizontal Offset</Text>
            <CustomRange
              maxValue={100}
              minValue={-100}
              defaultValue={horizontalOffset}
              handleChange={(newValue: number) => setHorizontalOffset(newValue)}
            />
          </Style>
          <Style>
            <Text>Vertical Offset</Text>
            <CustomRange
              maxValue={100}
              minValue={-100}
              defaultValue={verticallOffset}
              handleChange={(newValue: number) => setVerticallOffset(newValue)}
            />
          </Style>
          <Style>
            <Text>Blur</Text>
            <CustomRange
              maxValue={300}
              minValue={0}
              defaultValue={blur}
              handleChange={(newValue: number) => setBlur(newValue)}
            />
          </Style>
          <Style>
            <Text>Spread Radius</Text>
            <CustomRange
              maxValue={200}
              minValue={-200}
              defaultValue={spreadRadius}
              handleChange={(newValue: number) => setSpreadRadius(newValue)}
            />
          </Style>
          <Style>
            <Text>Opacity</Text>
            <CustomRange
              maxValue={100}
              minValue={0}
              defaultValue={opacity * 100}
              handleChange={(newValue: number) => setOpacity(newValue / 100)}
            />
          </Style>
          <Style>
            <Text>Color</Text>
            <Input
              type="color"
              value={shadowColor}
              onChange={(e: any) => {
                setShadowColor(e.target.value);
              }}
            />
          </Style>
        </Styles>
        <Box boxShadow={boxShadow} />
      </Wrapper>
      <CodeBox text={`box-shadow: ${boxShadow}`} multiLine={false} />
    </Container>
  );
}

export default BoxShadow;
