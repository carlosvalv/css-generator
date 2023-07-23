import { useEffect, useState } from 'react';
import styled from 'styled-components';


const Container = styled.div<{ top: number, left: number, isDragging: boolean }>`
  width: 25px;
  height: 25px;
  border: solid 1px #000;
  position: absolute;
  top : ${props => props.top}%;
  left : ${props => props.left}%;
  cursor: move;
  transform: ${props => props.isDragging ? "translate(-50%, -50%)" : "translate(-50%, -50%)"};
  box-shadow: ${props => props.isDragging ? "0 0 10px rgba(0, 0, 0, 0.3)" : "none"};
  background-color: ${props => (props.isDragging ? "#222" : "#fff")};
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color: #222;
  }
`;

export type CornerDraggableProps = {
  horizontal: boolean,
  initTop: number
  initLeft: number,
  handleChangeValue(val: number): void
}

export function CornerDraggable(props: CornerDraggableProps) {
  const [top, setTop] = useState(props.initTop);
  const [left, setLeft] = useState(props.initLeft);
  const [dragging, setDragging] = useState(false);

  const handleDragStart = () => {
    setDragging(true);
  };

  useEffect(() => {

    const handleDragEnd = (event: any) => {
      setDragging(false);
    };

    const handleDrag = (event: any) => {
      event.preventDefault()
      if (!dragging) return;
      if (event.screenX === 0 && event.screenY === 0) {
        return;
      }

      let elem = document.getElementById("box");
      let bounding = elem!.getBoundingClientRect();
      if (!props.horizontal) {
        const currentY = event.clientY;
        let t = ((currentY - bounding.y) / bounding.height) * 100
        if (t < 0) t = 0;
        if (t > 100) t = 100;
        setTop(t);
        props.handleChangeValue(t);
        return;

      }

      const currentX = event.clientX;
      let l = ((currentX - bounding.x) / bounding.width) * 100
      if (l < 0) l = 0;
      if (l > 100) l = 100;
      setLeft(l);
      props.handleChangeValue(l);

      return;


    };

    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleDragEnd);

    return () => {
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("mouseup", handleDragEnd);
    };
  }, [dragging, top, props]);

  return (
    <Container isDragging={dragging} top={top} left={left} onMouseDown={handleDragStart} draggable>

    </Container>
  );
}