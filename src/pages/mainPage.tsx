import styled, { ThemeProvider } from 'styled-components';
import { LeftMenu } from '../components/leftMenu';
import { BoxShadow } from '../components/boxShadow';
import { lightTheme } from '../themes';
import InterfaceProvider from '../providers/ui';
import { Header } from '../components/header';
import { BorderRadius } from '../components/borderRadius';

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

export enum Page {
  BORDER_RADIUS = 1,
  BOX_SHADOW = 2
}

export type MainPageProps = {
  page: Page
}

export function MainPage(props: MainPageProps) {

  const renderComponent = () => {
    switch(props.page){
      case(Page.BORDER_RADIUS):
        return <BorderRadius />;
      case(Page.BOX_SHADOW):
        return <BoxShadow />;      
    }
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <InterfaceProvider page={props.page}>
        <Container>
          <LeftMenu />
          <Wrapper>
            <Header />
            {renderComponent()}
          </Wrapper>
        </Container >
      </InterfaceProvider>
    </ThemeProvider>
  );
}