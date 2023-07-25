import { BorderRadius } from "./pages/borderRadius";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <BorderRadius />,
    path: "/",
  },
  {
    element: <BorderRadius />,
    path: "/css-generator",
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
