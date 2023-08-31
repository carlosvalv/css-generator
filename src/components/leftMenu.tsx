import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InterfaceContext from '../context/interface';
import { useContext } from 'react';

const Container = styled.div<{open: boolean}>`
  position: sticky;
  height: calc(100vh - 2em);
  background-color: ${props=>props.theme.colors.primary500};
  min-width: 15em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  transition-duration: .3s;
  border-right: 2px solid ${props=>props.theme.colors.secondary700};

  @media (max-width: 1200px) {
    margin-left: ${props=>props.open ? "0" : "-100vw"};
    position: fixed;
    margin-top: 65px;
    width: calc(100vw - 2em);
    z-index: 1;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  a{
    color:${props=>props.theme.colors.secondary500};
    text-decoration: none;
    font-weight: 700;
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    font-size: 16px;
    opacity: 0.7;
    transition:opacity 0.44s;
    &:hover{
      opacity: 1;
    }
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
  font-size: 20px;
  color: ${props=>props.theme.colors.white};
`;

export function LeftMenu() {
  const [state] = useContext(InterfaceContext)!;

  return ( 
    <Container open={state.openMenu}>
      <Title>css generator</Title>
      <List>
        <Link to={"/box-shadow"}>box shadow</Link>
        <Link to={"/border-radius"}>border radius</Link>
      </List>
    </Container>
  );
}