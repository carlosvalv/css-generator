import styled from 'styled-components';
import { LeftMenu } from '../components/leftMenu';
import { BoxShadow } from '../components/boxShadow';

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

export function BoxShadowPage() {
  return (
    <Container>
      <LeftMenu />
      <Wrapper><BoxShadow /></Wrapper> 
    </Container >
  );
}
