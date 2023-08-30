import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: sticky;
  height: calc(100vh - 2em);
  background-color: ${props=>props.theme.colors.primary500};
  min-width: 15em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;

  @media (max-width: 1250px) {
    display: none;
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
  return (
    <Container>
      <Title>css generator</Title>
      <List>
        <Link to={"/box-shadow"}>box shadow</Link>
        <Link to={"/border-radius"}>border radius</Link>
      </List>
    </Container>
  );
}