import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { CodeBox } from '../../components/codeBox';
import { Animations, Direction, FillMode, Time, Timing } from '../../enums/animation';
import CustomSelect from '../../components/customSelect';
import getEnumKeyByEnumValue from '../../services/utils/enums';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  padding: 4em;

  @media (max-width: 1200px) {
    position: initial;
    transform: none;
    padding: 3em;
    gap: 2em;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.5em;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

const Box = styled.div<{ animation: string; type: number }>`
  width: 40vmin;
  height: 40vmin;
  background-color: ${(props) => props.theme.colors.primary500};
  position: relative;
  margin: auto 0;
  border-radius: 1em;
  animation: ${(props) => Animations[props.type].keyframe} ${(props) => props.animation};
  @media (max-width: 1200px) {
    width: 55vmin;
    height: 55vmin;
  }
`;

const Style = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

const WrapperInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
`;

function Animation() {
  const [duration, setDuration] = useState(5);
  const [durationMeasure, setDurationMeasure] = useState(Time.SECONDS);
  const [name, setName] = useState('animation');
  const [delay, setDelay] = useState(1);
  const [delayMeasure, setDelayMeasure] = useState(Time.SECONDS);
  const [iterations, setIterations] = useState(2);
  const [animationText, setAnimationText] = useState('');
  const [direction, setDirection] = useState(Direction.NORMAL);
  const [fillMode, setFillMode] = useState(FillMode.FORWARDS);
  const [timingMode, setTimingMode] = useState(Timing.EASE);
  const [animationType, setAnimationType] = useState(0);
  const [infinite, setInfinite] = useState(false);
  const refSquare = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const delayUnit = delayMeasure === Time.SECONDS ? 's' : 'ms';
    const durationUnit = durationMeasure === Time.SECONDS ? 's' : 'ms';
    setAnimationText(
      `${duration}${durationUnit} ${timingMode} ${delay}${delayUnit} ${
        infinite ? 'infinite' : iterations
      } ${direction} ${fillMode};`,
    );
    if (infinite) return;
    if (!refSquare || !refSquare.current) return;
    refSquare.current.style.animation = 'none';
    setTimeout(() => {
      if (!refSquare || !refSquare.current) return;
      refSquare.current.style.animation = '';
    }, 200);
  }, [
    delay,
    duration,
    infinite,
    iterations,
    delayMeasure,
    durationMeasure,
    direction,
    fillMode,
    timingMode,
  ]);

  return (
    <Container>
      <Wrapper>
        <Styles>
          <Style>
            <TextField
              style={{ flex: 1 }}
              label="Name"
              value={name}
              onChange={(e: any) => {
                setName(e.target.value);
              }}
            />
          </Style>
          <Style>
            <FormControl style={{ flex: 1 }}>
              <InputLabel id="animation-type-label">Type</InputLabel>
              <Select
                labelId="animation-type-label"
                label="Type"
                onChange={(e: any) => {
                  setAnimationType(e.target.value);
                }}
                value={animationType}
              >
                {Animations.map((animation) => (
                  <MenuItem key={animation.value} value={animation.value}>
                    {animation.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Style>
          <Style>
            <WrapperInputs>
              <TextField
                type="number"
                label="Duration"
                InputProps={{ inputProps: { min: 0 } }}
                value={duration}
                onChange={(e: any) => {
                  setDuration(e.target.value);
                }}
              />
              <CustomSelect
                values={Object.values(Time)}
                defaultValue={durationMeasure}
                handleChange={(newValue) => {
                  setDurationMeasure(
                    Time[getEnumKeyByEnumValue(Time, newValue) as keyof typeof Time],
                  );
                }}
              />
            </WrapperInputs>
          </Style>
          <Style>
            <WrapperInputs>
              <TextField
                type="number"
                label="Delay"
                InputProps={{ inputProps: { min: 0 } }}
                value={delay}
                onChange={(e: any) => {
                  setDelay(e.target.value);
                }}
              />
              <CustomSelect
                values={Object.values(Time)}
                defaultValue={delayMeasure}
                handleChange={(newValue) => {
                  setDelayMeasure(Time[getEnumKeyByEnumValue(Time, newValue) as keyof typeof Time]);
                }}
              />
            </WrapperInputs>
          </Style>
          {!infinite && (
            <Style>
              <TextField
                style={{ flex: 1 }}
                label="Iterations"
                type="number"
                InputProps={{ inputProps: { min: 0 } }}
                value={iterations}
                onChange={(e: any) => {
                  setIterations(e.target.value);
                }}
              />
            </Style>
          )}
          <Style>
            <FormControlLabel
              style={{ paddingLeft: 2 }}
              control={<Checkbox />}
              label="Infinite"
              checked={infinite}
              onChange={(e: any) => {
                setInfinite(e.target.checked);
              }}
            />
          </Style>
          <CustomSelect
            label="Direction"
            values={Object.values(Direction)}
            defaultValue={direction}
            handleChange={(newValue) => {
              setDirection(
                Direction[getEnumKeyByEnumValue(Direction, newValue) as keyof typeof Direction],
              );
            }}
            id="animation-direction-label"
          />
          <CustomSelect
            label="Fill mode"
            values={Object.values(FillMode)}
            defaultValue={fillMode}
            handleChange={(newValue) => {
              setFillMode(
                FillMode[getEnumKeyByEnumValue(FillMode, newValue) as keyof typeof FillMode],
              );
            }}
            id="animation-fill-label"
          />
          <CustomSelect
            label="Timing"
            values={Object.values(Timing)}
            defaultValue={timingMode}
            handleChange={(newValue) => {
              setTimingMode(Timing[getEnumKeyByEnumValue(Timing, newValue) as keyof typeof Timing]);
            }}
            id="animation-timing-label"
          />
        </Styles>
        <Box animation={animationText} type={animationType} ref={refSquare} />
      </Wrapper>
      <CodeBox text={`animation: ${name} ${animationText}`} multiLine={false} />
      {/* @ts-ignore */}
      <CodeBox text={`@keyframes ${name}{${Animations[animationType].keyframe.rules}}`} multiLine />
    </Container>
  );
}

export default Animation;
