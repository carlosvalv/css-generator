import styled from 'styled-components';
import { BorderRadius } from '../components/borderRadius';
import { LeftMenu } from '../components/leftMenu';

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100vh;
  background: #fafafa;
`;

export type BorderRadiusProps = {}

export function BorderRadiusPage(props: BorderRadiusProps) {
  return (
    <Container>
      <LeftMenu />
      <Wrapper><BorderRadius /></Wrapper> 
    </Container >
  );
}
