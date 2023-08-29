import { HashRouter, Route, Routes } from 'react-router-dom';
import { BoxShadow } from "./pages/boxShadow";
import { BorderRadiusPage } from "./pages/borderRadiusPage";

function App() {
  return (
    <HashRouter future={{ v7_startTransition: true }}>
       <Routes>
        <Route path="/" element={<BorderRadiusPage/>}/> 
        <Route path="/box-shadow/" element={<BoxShadow/>}/> 
        <Route path="/border-radius/" element={<BorderRadiusPage/>}/> 
        <Route path="/css-generator/" element={<BoxShadow/>}/>
        <Route path="/css-generator/box-shadow" element={<BoxShadow/>}/>
        <Route path="/css-generator/border-radius" element={<BorderRadiusPage/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
