import styled from 'styled-components';
import InterfaceContext, { setOpenMenu } from '../context/interface';
import { useContext } from 'react';
import { MenuSvg } from './svgs/menuSvg';

const Container = styled.div`
  z-index: 1;
  position: sticky;
  top: 0;
  min-height: 3em;
  width: calc(100%  - 1em);
  background: ${props => props.theme.colors.primary500};
  border-bottom: 2px solid ${props => props.theme.colors.secondary700};
  display: flex;
  padding: 0.5em;
  
  @media (min-width: 1200px) {
    display:none;
  }
`;

const SvgWrapper = styled.div`
  width: 25px;
  cursor: pointer;
  svg{
    fill: ${props => props.theme.colors.white};
    opacity: 0.7;
    &:hover{
      opacity:1;
    }
  }
`;

export function Header() {
  const [state, dispatch] = useContext(InterfaceContext)!;

  const close = () => {
    dispatch(setOpenMenu(!state.openMenu))
  };

  return (  
    <Container>
      <SvgWrapper onClick={()=>close()}><MenuSvg/></SvgWrapper>
    </Container>
  );
}