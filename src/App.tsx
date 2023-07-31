import { BorderRadius } from "./pages/borderRadius";
import { HashRouter, Route, RouterProvider, Routes, createBrowserRouter, createHashRouter } from 'react-router-dom';
import { BoxShadow } from "./pages/boxShadow";

const router = createHashRouter([
  {
    element: <BorderRadius />,
    path: "/",
  },
  {
    element: <BorderRadius />,
    path: "/css-generator",
  },
  {
    element: <BorderRadius />,
    path: "/css-generator/border-radius",
  },
  {
    element: <BoxShadow />,
    path: "/css-generator/box-shadow",
  },
  {
    element: <BoxShadow />,
    path: "/box-shadow",
  }
]);

function App() {
  return (
    // <RouterProvider router={router} />
    <HashRouter future={{ v7_startTransition: true }}>
       <Routes>
        <Route path="/" element={<BorderRadius/>}/> 
        <Route path="/box-shadow/" element={<BoxShadow/>}/> 
        <Route path="/css-generator/" element={<BoxShadow/>}/>
        <Route path="/css-generator/box-shadow" element={<BoxShadow/>}/>
        <Route path="/css-generator/border-radius" element={<BorderRadius/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
