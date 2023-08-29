import { HashRouter, Route, Routes } from 'react-router-dom';
import { BorderRadiusPage } from "./pages/borderRadiusPage";
import { BoxShadowPage } from './pages/boxShadowPage';

function App() {
  return (
    <HashRouter future={{ v7_startTransition: true }}>
       <Routes>
        <Route path="/" element={<BorderRadiusPage/>}/> 
        <Route path="/box-shadow/" element={<BoxShadowPage/>}/> 
        <Route path="/border-radius/" element={<BorderRadiusPage/>}/> 
        <Route path="/css-generator/" element={<BoxShadowPage/>}/>
        <Route path="/css-generator/box-shadow" element={<BoxShadowPage/>}/>
        <Route path="/css-generator/border-radius" element={<BorderRadiusPage/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
