import styled, { ThemeProvider } from 'styled-components';
import { LeftMenu } from '../components/leftMenu';
import { BoxShadow } from '../components/boxShadow';
import { lightTheme } from '../themes';
import InterfaceProvider from '../providers/ui';
import { Header } from '../components/header';

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.colors.secondary500};
  display: flex;
  flex-direction: column;
`;

export function BoxShadowPage() {
  return (
    <ThemeProvider theme={lightTheme}>
      <InterfaceProvider>
        <Container>
          <LeftMenu />
          <Wrapper>
            <Header />
            <BoxShadow />
          </Wrapper>
        </Container >
      </InterfaceProvider>
    </ThemeProvider>
  );
}
