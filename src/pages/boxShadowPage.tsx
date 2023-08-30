import styled, { ThemeProvider } from 'styled-components';
import { LeftMenu } from '../components/leftMenu';
import { BoxShadow } from '../components/boxShadow';
import { lightTheme } from '../themes';

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${props=>props.theme.colors.secondary500};
`;

export function BoxShadowPage() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <LeftMenu />
        <Wrapper><BoxShadow /></Wrapper> 
      </Container >
    </ThemeProvider>
  );
}
