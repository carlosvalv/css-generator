import styled, { keyframes } from 'styled-components';
import { CodeBox } from './codeBox';
import { useEffect, useState } from 'react';
import { MenuItem, Select } from '@mui/material';

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

const animation = keyframes`
  0%,
	100% {
		transform: translateX(0%);
		transform-origin: 50% 50%;
	}

	15% {
		transform: translateX(-30px) rotate(-6deg);
	}

	30% {
		transform: translateX(15px) rotate(6deg);
	}

	45% {
		transform: translateX(-15px) rotate(-3.6deg);
	}

	60% {
		transform: translateX(9px) rotate(2.4deg);
	}

	75% {
		transform: translateX(-6px) rotate(-1.2deg);
	}
`;


const Box = styled.div<{ animation: string }>`
  width: 45vmin;
  height: 45vmin;
  background-color: ${props => props.theme.colors.primary500};
  position: relative;
  margin: auto 0;
  border-radius: 1em;
  animation: ${animation} ${props => props.animation};
  @media (max-width: 1200px) {
    width: 60vmin;
    height: 60vmin;
  }
`;

const Style = styled.div<{ row: boolean }>`
  display: flex;
  flex-direction: ${props => props.row ? "row" : "column"};
  gap: 1em;
`;

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Input = styled.input`
  max-width: 300px;
  min-width: 250px;
  background-color: ${props => props.theme.colors.secondary500};
  border: 1px solid ${props => props.theme.colors.secondary900};
  border-radius: 4px;
  font-size: 16px;
  &:focus{
    outline: 1px solid ${props => props.theme.colors.primary500};
  }

`;

const WrapperInputs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
`;


enum Time {
  SECONDS = 0,
  MILISECONDS = 1
}

export function Animation() {
  const [duration, setDuration] = useState(5);
  const [durationMeasure, setDurationMeasure] = useState(Time.SECONDS);
  const [name, setName] = useState("animation");
  const [delay, setDelay] = useState(3);
  const [delayMeasure, setDelayMeasure] = useState(Time.SECONDS);
  const [iterations, setIterations] = useState(2);
  const [animationText, setAnimationText] = useState("");
  const [infinite, setInfinite] = useState(false);

  useEffect(() => {
    let delayUnit = delayMeasure === Time.SECONDS ? "s" : "ms";
    let durationUnit = durationMeasure === Time.SECONDS ? "s" : "ms";
    setAnimationText(`${duration}${durationUnit} ease-in-out ${delay}${delayUnit} ${infinite ? "infinite" : iterations} normal forwards;`)
  }, [delay, duration, name, infinite, iterations, delayMeasure, durationMeasure])

  return (
    <Container>
      <Wrapper>
        <Styles>
          <Style row={false}>
            <Text>Name</Text>
            <Input type='text' value={name} onChange={(e: any) => { setName(e.target.value) }} />
          </Style>
          <Style row={false}>
            <Text>Duration</Text>
            <WrapperInputs>
              <Input type='number' min={0} value={duration} onChange={(e: any) => { setDuration(e.target.value) }} />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={durationMeasure}
                label=""
                onChange={(e: any) => setDurationMeasure(e.target.value)}>
                <MenuItem value={Time.SECONDS}>Seconds</MenuItem>
                <MenuItem value={Time.MILISECONDS}>Miliseconds</MenuItem>
              </Select>
            </WrapperInputs>

          </Style>
          <Style row={false}>
            <Text>Delay</Text>
            <WrapperInputs>
              <Input type='number' min={0} value={delay} onChange={(e: any) => { setDelay(e.target.value) }} />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={delayMeasure}
                label=""
                onChange={(e: any) => setDelayMeasure(e.target.value)}>
                <MenuItem value={Time.SECONDS}>Seconds</MenuItem>
                <MenuItem value={Time.MILISECONDS}>Miliseconds</MenuItem>
              </Select>
            </WrapperInputs>
          </Style>
          {!infinite &&
            <Style row={false}>
              <Text>Iterations</Text>
              <Input type='number' min={0} value={iterations} onChange={(e: any) => { setIterations(e.target.value) }} />
            </Style>
          }
          <Style row={true}>
            <Text>Infinite</Text>
            <input type='checkbox' checked={infinite} onChange={(e: any) => { setInfinite(e.target.checked) }} />
          </Style>
        </Styles>
        <Box animation={animationText} />
      </Wrapper>
      <CodeBox text={"animation: " + name + " " + animationText} />
      <CodeBox text={animation.rules} />
    </Container >
  );
}
