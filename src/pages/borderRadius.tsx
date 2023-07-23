import { useState } from 'react';
import styled from 'styled-components';
import { CornerDraggable } from '../components/cornerDraggable';


const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Box = styled.div<{ radius1: number, radius2: number, radius3: number, radius4: number }>`
  width: 300px;
  height: 300px;
  color: grey;
  background-color: black;
  position: relative;
  border-radius: ${props => props.radius4}% ${props => 100 - props.radius4}% ${props => 100 - props.radius2}%  ${props => props.radius2}% / ${props => props.radius1}% ${props => props.radius3}% ${props => 100 - props.radius3}% ${props =>  100 -props.radius1}%;
`;

const BoxBorder = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  color: grey;
  background-color: transparent;
  border: 1px dotted #000;
`;


export type BorderRadiusProps = {

}

export function BorderRadius(props: BorderRadiusProps) {
  const [corner1, setCorner1] = useState(0);
  const [corner2, setCorner2] = useState(0);
  const [corner3, setCorner3] = useState(100);
  const [corner4, setCorner4] = useState(100);

  // const router = createBrowserRouter([
  //   {
  //     element: <HomePage />,
  //     path: "/",
  //   },
  // ]);

  return (
    <Container>
      <Box radius1={corner1} radius2={corner2} radius3={corner3} radius4={corner4} id="box">
        <BoxBorder />
          <CornerDraggable horizontal={false} initTop={corner1} initLeft={0} handleChangeValue={(val:number)=>{setCorner1(val)}} />
          <CornerDraggable horizontal={true} initTop={100} initLeft={corner2} handleChangeValue={(val:number)=>{setCorner2(val)}}/>
          <CornerDraggable horizontal={false} initTop={corner3} initLeft={100} handleChangeValue={(val:number)=>{setCorner3(val)}}/>
          <CornerDraggable horizontal={true} initTop={0} initLeft={corner4} handleChangeValue={(val:number)=>{setCorner4(val)}}/>
      </Box>
    </Container >
  );
}
