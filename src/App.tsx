import { BorderRadius } from "./pages/borderRadius";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BoxShadow } from "./pages/boxShadow";

const router = createBrowserRouter([
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
    <RouterProvider router={router} />
  );
}

export default App;
