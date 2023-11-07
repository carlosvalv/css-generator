import styled, { ThemeProvider } from 'styled-components';
import { LeftMenu } from '../components/leftMenu';
import BoxShadow from './BoxShadow/BoxShadow';
import lightTheme from '../themes';
import InterfaceProvider from '../providers/ui';
import Header from '../components/header';
import BorderRadius from './BorderRadius/BorderRadius';
import Animation from './Animation/Animation';
import Page from '../types/page';

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.secondary500};
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    overflow-y: auto;
    height: 100vh;
  }
`;

export type MainPageProps = {
  page: Page;
};

function MainPage(props: MainPageProps) {
  const { page } = props;

  const renderComponent = () => {
    switch (page) {
      case Page.BOX_SHADOW:
        return <BoxShadow />;
      case Page.ANIMATION:
        return <Animation />;
      case Page.BORDER_RADIUS:
      default:
        return <BorderRadius />;
    }
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <InterfaceProvider page={page}>
        <Container>
          <LeftMenu page={page} />
          <Wrapper>
            <Header />
            {renderComponent()}
          </Wrapper>
        </Container>
      </InterfaceProvider>
    </ThemeProvider>
  );
}

export default MainPage;
