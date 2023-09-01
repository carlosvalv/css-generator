import { HashRouter, Route, Routes } from 'react-router-dom';
import { MainPage, Page } from './pages/mainPage';

function App() {
  return (
    <HashRouter future={{ v7_startTransition: true }}>
       <Routes>
        <Route path="/" element={<MainPage page={Page.BORDER_RADIUS} />}/> 
        <Route path="/box-shadow/" element={<MainPage page={Page.BOX_SHADOW} />}/> 
        <Route path="/border-radius/" element={<MainPage page={Page.BORDER_RADIUS} />}/> 
        <Route path="/css-generator/" element={<MainPage page={Page.BOX_SHADOW} />}/>
        <Route path="/css-generator/box-shadow" element={<MainPage page={Page.BOX_SHADOW} />}/>
        <Route path="/css-generator/border-radius" element={<MainPage page={Page.BORDER_RADIUS} />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
