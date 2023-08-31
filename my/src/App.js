import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/home/home';
import User from './pages/user/user';
import Product from './pages/product/product';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Login from './components/login/login';
import "./styles/global.scss"

function App() {


  const Layout = () => {
    return (
      <div className='main'>
        <Navbar />
        <div className='container'>
          <div className='mainContainer'>
            <Main />
          </div>
          <div className='contentContainer'>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout />
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/user",
          element: <User />,
        },
        {
          path: "/product",
          element: <Product />,
        },
      ]
    },
    {
      path: "/login",
      element: (
        <Login />
      ),
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
