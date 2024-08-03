import { keyframes } from 'styled-components';

export const bounce = keyframes`
  0%, 100% {
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

export const blink = keyframes`
  0%, 50%, 100% {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
`;

export const spinScale = keyframes`
  0%, 100% {
      transform: rotate(0deg) scale(1);
  }

  25% {
      transform: rotate(90deg) scale(1.2);
  }

  50% {
      transform: rotate(180deg) scale(1);
  }

  75% {
      transform: rotate(270deg) scale(0.8);
  }
`;

export const slideFade = keyframes`
  0%, 100% {
      transform: translateY(0);
      opacity: 1;
  }

  25% {
      transform: translateY(-20px);
      opacity: 0.5;
  }

  50% {
      transform: translateY(10px);
      opacity: 0.75;
  }

  75% {
      transform: translateY(-10px);
      opacity: 0.5;
  }
`;
