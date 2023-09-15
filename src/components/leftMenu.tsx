import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InterfaceContext from '../context/interface';
import { useContext } from 'react';
import { Page } from '../pages/mainPage';

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
`;

const LinkWrapper = styled.div<{highlight: number}>`
  a{
    color:${props=>props.theme.colors.secondary500};
    text-decoration: none;
    font-weight: 700;
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    font-size: 16px;
    opacity: ${props=> props.highlight ? "1" : "0.6"};
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

export type LeftMenuProps = {
  page: Page
}

export function LeftMenu(props: LeftMenuProps) {
  const [state] = useContext(InterfaceContext)!;

  return ( 
    <Container open={state.openMenu}>
      <Title>css generator</Title>
      <List>
        <LinkWrapper highlight={props.page === Page.BOX_SHADOW ? 1 : 0}><Link to={"/box-shadow"}>box shadow</Link></LinkWrapper>
        <LinkWrapper highlight={props.page === Page.BORDER_RADIUS ? 1 : 0}><Link to={"/border-radius"}>border radius</Link></LinkWrapper>
        <LinkWrapper highlight={props.page === Page.ANIMATION ? 1 : 0}><Link to={"/animation"}>animations</Link></LinkWrapper>
      </List>
    </Container>
  );
}