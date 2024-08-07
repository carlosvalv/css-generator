import { HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage';
import Page from './types/page';

function App() {
  return (
    <HashRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<MainPage page={Page.BORDER_RADIUS} />} />
        <Route path="/box-shadow/" element={<MainPage page={Page.BOX_SHADOW} />} />
        <Route path="/border-radius/" element={<MainPage page={Page.BORDER_RADIUS} />} />
        <Route path="/animation/" element={<MainPage page={Page.ANIMATION} />} />
        <Route path="/scrollbar/" element={<MainPage page={Page.SCROLLBAR} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
