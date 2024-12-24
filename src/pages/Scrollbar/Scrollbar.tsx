import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CodeBox } from '../../components/codeBox';
import CustomRange from '../../components/customRange';

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: calc(100% - 4em);
  width: calc(100% - 4em);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  padding: 2em;
  display: flex;
  @media (max-width: 1200px) {
    position: initial;
    transform: none;
  }

  .code-text {
    max-height: 500px;
    overflow-y: auto;
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

function Scrollbar() {
  const [thumbColor, setThumbColor] = useState('#000000');
  const [trackColor, setTrackColor] = useState('#ffffff');
  const [size, setSize] = useState(20);
  const [borderRadius, setBorderRadius] = useState(10);
  const [thumbBorderWidth, setThumbBorderWidth] = useState(1);
  const [thumbBorderColor, setThumbBorderColor] = useState('#ed1818');
  const [code, setCode] = useState('');

  useEffect(() => {
    const cssCodeForCodeBox = `
* {
  --sb-track-color: ${trackColor};
  --sb-thumb-color: ${thumbColor};
  --sb-size: ${size}px;
}

*::-webkit-scrollbar {
  width: var(--sb-size);
}

*::-webkit-scrollbar-track {
  background: var(--sb-track-color) !important;
  border-radius: ${borderRadius}px;
}

*::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color) !important;
  border-radius: ${borderRadius}px;
  ${thumbBorderWidth > 0 ? `border: ${thumbBorderWidth}px solid ${thumbBorderColor};` : ''}
}

@supports not selector(::-webkit-scrollbar) {
  * {
    scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
  }
}
    `;

    setCode(cssCodeForCodeBox);
  }, [trackColor, thumbColor, size, borderRadius, thumbBorderWidth, thumbBorderColor]);

  useEffect(() => {
    let styleElement = document.querySelector('#dynamic-styles');

    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'dynamic-styles';
      document.head.appendChild(styleElement);
    }

    const cssCodeForApp = `
#scrollbar span {
  --sb-track-color: ${trackColor} !important;
  --sb-thumb-color: ${thumbColor} !important;
  --sb-size: ${size}px !important;
}

#scrollbar span::-webkit-scrollbar {
  width: var(--sb-size) !important;
}

#scrollbar span::-webkit-scrollbar-track {
  background: var(--sb-track-color) !important;
  border-radius: ${borderRadius}px !important;
}

#scrollbar span::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color) !important;
  border-radius: ${borderRadius}px !important;
${
  thumbBorderWidth > 0
    ? `border: ${thumbBorderWidth}px solid ${thumbBorderColor}; !important`
    : ''
}
}

@supports not selector(::-webkit-scrollbar) {
  #scrollbar span {
    scrollbar-color: var(--sb-thumb-color) var(--sb-track-color) !important;
  }
}
    `;

    styleElement.textContent = cssCodeForApp; // Este código se inyecta en el documento
    return () => {
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, [trackColor, thumbColor, size, borderRadius, thumbBorderWidth, thumbBorderColor]);

  return (
    <Container id="scrollbar">
      <Wrapper>
        <Styles>
          <Style>
            <Text>Track color</Text>
            <Input
              type="color"
              value={trackColor}
              onChange={(e: any) => {
                setTrackColor(e.target.value);
              }}
            />
          </Style>
          <Style>
            <Text>Thumb color</Text>
            <Input
              type="color"
              value={thumbColor}
              onChange={(e: any) => {
                setThumbColor(e.target.value);
              }}
            />
          </Style>
          <Style>
            <Text>Size</Text>
            <CustomRange
              maxValue={150}
              minValue={0}
              defaultValue={20}
              handleChange={(newValue: number) => setSize(newValue)}
            />
          </Style>
          <Style>
            <Text>Border radius</Text>
            <CustomRange
              maxValue={60}
              minValue={0}
              defaultValue={10}
              handleChange={(newValue: number) => setBorderRadius(newValue)}
            />
          </Style>
          <Style>
            <Text>Thumb border width</Text>
            <CustomRange
              maxValue={100}
              minValue={0}
              defaultValue={1}
              handleChange={(newValue: number) => setThumbBorderWidth(newValue)}
            />
          </Style>
          <Style>
            <Text>Thumb border color</Text>
            <Input
              type="color"
              value={thumbBorderColor}
              onChange={(e: any) => {
                setThumbBorderColor(e.target.value);
              }}
            />
          </Style>
        </Styles>
      </Wrapper>
      <CodeBox text={code} multiLine />
    </Container>
  );
}

export default Scrollbar;
