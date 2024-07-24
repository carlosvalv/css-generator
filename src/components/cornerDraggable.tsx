import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

const Container = styled.div<{ top: number; left: number; dragging: number }>`
  width: 25px;
  height: 25px;
  border: solid 1px ${(props) => props.theme.colors.black};
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  cursor: move;
  transform: ${(props) => (props.dragging ? 'translate(-50%, -50%)' : 'translate(-50%, -50%)')};
  box-shadow: ${(props) => (props.dragging ? '0 0 10px rgba(0, 0, 0, 0.3)' : 'none')};
  background-color: ${(props) => (props.dragging
    ? props.theme.colors.primary500
    : props.theme.colors.secondary500)};
  opacity: 0.6;
  &:hover,
  &:active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color: ${(props) => props.theme.colors.primary500};
  }
`;

export type CornerDraggableProps = {
  horizontal: boolean;
  initTop: number;
  initLeft: number;
  handleChangeValue(val: number): void;
};

export function CornerDraggable(props: CornerDraggableProps) {
  const {
    initTop, initLeft, horizontal, handleChangeValue,
  } = props;

  const [top, setTop] = useState(initTop);
  const [left, setLeft] = useState(initLeft);
  const [dragging, setDragging] = useState(false);

  const handleDragStart = () => {
    setDragging(true);
  };

  useEffect(() => {
    const handleDragEnd = () => {
      setDragging(false);
    };

    const handleDrag = (event: any) => {
      event.preventDefault();
      if (!dragging) return;
      if (event.screenX === 0 && event.screenY === 0) return;

      const elem = document.getElementById('box');
      if (!elem) return;
      const bounding = elem.getBoundingClientRect();
      if (!horizontal) {
        const currentY = isMobile ? event.touches[0].clientY : event.clientY;
        let t = ((currentY - bounding.y) / bounding.height) * 100;
        t = Math.min(Math.max(t, 0), 100);
        setTop(t);
        handleChangeValue(t);
        return;
      }

      const currentX = isMobile ? event.touches[0].clientX : event.clientX;
      let l = ((currentX - bounding.x) / bounding.width) * 100;
      l = Math.min(Math.max(l, 0), 100);
      setLeft(l);
      handleChangeValue(l);
    };

    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('touchmove', handleDrag, { passive: false });
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchend', handleDragEnd);

    return () => {
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('touchmove', handleDrag);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchend', handleDragEnd);
    };
  }, [dragging, top, props]);

  return (
    <Container
      dragging={dragging ? 1 : 0}
      top={top}
      left={left}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
    />
  );
}
