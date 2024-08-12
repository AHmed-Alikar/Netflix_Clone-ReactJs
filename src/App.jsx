import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import Browser from "./pages/Brower";

function App() {
  const route = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/browser', element: <Browser /> },
    { path: '/list', element: <List /> },
    { path: '/login', element: <Login /> },
    { path: '/singup', element: <SingUp /> }
  ])


  return <RouterProvider router={route} />
}

export default App
