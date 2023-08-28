import { Routes, Route, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar/RightBar";

function App() {

  const Layout = () => {
    return(
      <div>
        <Navbar />
        <div style={{display:'flex'}}>
        <LeftBar />
        <Outlet />
        <RightBar />
        </div>
        <h1>yo</h1>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element: <Home />
        },
        {
          path:"/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ])

  return(
    <div>
      <RouterProvider router={router} />
    </div>
    )
}

export default App;
