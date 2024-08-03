import { Keyframes } from 'styled-components';
import { blink, bounce, slideFade, spinScale } from '../components/animations';

export enum Time {
  SECONDS = 'seconds',
  MILISECONDS = 'miliseconds',
}

export enum Direction {
  NORMAL = 'normal',
  REVERSE = 'reverse',
  ALTERNATE = 'alternate',
  ALTERNATE_REVERSE = 'alternate-reverse',
}

export enum FillMode {
  NONE = 'none',
  FORWARDS = 'forwards',
  BACKWARDS = 'backwards',
  BOTH = 'both',
}

export enum Timing {
  LINEAR = 'linear',
  EASE = 'ease',
  EASE_IN = 'ease-in',
  EASE_OUT = 'ease-out',
  EASE_IN_OUT = 'ease-in-out',
}

type Animation = {
  name: string;
  value: number;
  keyframe: Keyframes;
};

export const Animations: Animation[] = [
  {
    value: 0,
    name: 'Bounce',
    keyframe: bounce,
  },
  {
    value: 1,
    name: 'Blink',
    keyframe: blink,
  },
  {
    value: 2,
    name: 'Slide fade',
    keyframe: slideFade,
  },
  {
    value: 3,
    name: 'Spin scale',
    keyframe: spinScale,
  },
];
