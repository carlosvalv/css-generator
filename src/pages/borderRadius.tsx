import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CornerDraggable } from '../components/cornerDraggable';

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 2.5em;
`;

const Box = styled.div<{ radius: string}>`
  width: 300px;
  height: 300px;
  background-color: black;
  position: relative;
  border-radius: ${props => props.radius};
  margin: auto;
`;

const BoxBorder = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: transparent;
  border: 2px dotted #000;
  top: -2px;
  left: -2px;
`;

const TextWrapper = styled.div`
  background: #fafafa;
  border: 1px solid #e3e3e3;
  padding: 1em;
  position: absolute;
  bottom: -10em;
`;

const Text = styled.span`
  color: #fff;
  font-size: 20px;
  font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
  color: #000;
`;


export type BorderRadiusProps = {

}

export function BorderRadius(props: BorderRadiusProps) {
  const [corner1, setCorner1] = useState(25);
  const [corner2, setCorner2] = useState(12);
  const [corner3, setCorner3] = useState(33);
  const [corner4, setCorner4] = useState(71);
  const [borderRadius, setBorderRadius] = useState("");

  useEffect(()=>{
    let string =  parseFloat(corner4.toString()).toFixed(1) + "% " + (parseFloat((100 - corner4).toString()).toFixed(1)) + "% " 
    + (parseFloat((100 - corner2).toString()).toFixed(1)) + "% " + parseFloat(corner2.toString()).toFixed(1)
    + "%/" + parseFloat(corner1.toString()).toFixed(1) + "% " + parseFloat(corner3.toString()).toFixed(1) + "% " 
    + (parseFloat((100 - corner3).toString()).toFixed(1)) + "% " + (parseFloat((100 - corner1).toString()).toFixed(1)) + "%";

    setBorderRadius(string);
  },[corner1, corner2, corner3, corner4])

  return (
    <Container>
      <Box radius={borderRadius} id="box">
        <BoxBorder />
        <CornerDraggable horizontal={false} initTop={corner1} initLeft={0} handleChangeValue={(val:number)=>{setCorner1(val)}} />
        <CornerDraggable horizontal={true} initTop={100} initLeft={corner2} handleChangeValue={(val:number)=>{setCorner2(val)}}/>
        <CornerDraggable horizontal={false} initTop={corner3} initLeft={100} handleChangeValue={(val:number)=>{setCorner3(val)}}/>
        <CornerDraggable horizontal={true} initTop={0} initLeft={corner4} handleChangeValue={(val:number)=>{setCorner4(val)}}/>
      </Box>
      <TextWrapper><Text>border-radius: {borderRadius};</Text></TextWrapper>
    </Container >
  );
}
