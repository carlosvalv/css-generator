import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CodeBox } from '../../components/codeBox';

const Container = styled.div<{ code: string }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  const [code, setCode] = useState('');

  useEffect(() => {
    setCode(
      `* {
  --sb-track-color: ${trackColor};
  --sb-thumb-color: ${thumbColor};
  --sb-size: 30px;
};  

*::-webkit-scrollbar {
  width: var(--sb-size)
}

*::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 3px;
}

*::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 3px;
  
}

@supports not selector(::-webkit-scrollbar) {
  * {
    scrollbar-color: var(--sb-thumb-color)
                     var(--sb-track-color);
  }
}`,
    );
  }, [thumbColor]);

  useEffect(() => {
    let styleElement = document.querySelector('.scrollbar');

    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'dynamic-styles';
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = code;
    return () => {
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, [code]);

  return (
    <Container code={code} id="scrollbar">
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
        </Styles>
      </Wrapper>
      <CodeBox text={code} multiLine />
    </Container>
  );
}

export default Scrollbar;
