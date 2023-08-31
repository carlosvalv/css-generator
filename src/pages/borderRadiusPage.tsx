import styled, { ThemeProvider } from 'styled-components';
import { BorderRadius } from '../components/borderRadius';
import { LeftMenu } from '../components/leftMenu';
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
`;

export type BorderRadiusProps = {}

export function BorderRadiusPage(props: BorderRadiusProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <InterfaceProvider>
        <Container>
          <LeftMenu />
          <Wrapper>
            <Header />
            <BorderRadius />
          </Wrapper>
        </Container >
      </InterfaceProvider>
    </ThemeProvider>
  );
}
