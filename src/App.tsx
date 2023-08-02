import { BorderRadius } from "./pages/borderRadius";
import { HashRouter, Route, Routes } from 'react-router-dom';
import { BoxShadow } from "./pages/boxShadow";

function App() {
  return (
    <HashRouter future={{ v7_startTransition: true }}>
       <Routes>
        <Route path="/" element={<BorderRadius/>}/> 
        <Route path="/box-shadow/" element={<BoxShadow/>}/> 
        <Route path="/border-radius/" element={<BorderRadius/>}/> 
        <Route path="/css-generator/" element={<BoxShadow/>}/>
        <Route path="/css-generator/box-shadow" element={<BoxShadow/>}/>
        <Route path="/css-generator/border-radius" element={<BorderRadius/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
