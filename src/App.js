import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Navbar from './components/navBar/Navbar';
import Leftbar from './components/leftBar/Leftbar';
import Rightbar from './components/rightBar/Rightbar';

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {

  const currentUser = true;

  const Layout =()=>{
    return(
      <div>
        <Navbar />
        <div style={{display:'flex'}}>
          <Leftbar/>
          <div style={{flex:5}}>
            <Outlet/>
          </div>
          <Rightbar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to='/login'/>
    }

    return children
  }
  
  const router = createBrowserRouter([
    {
      path:'/login',
      element:<Login/>
    },
  
    {
      path:'/register',
      element:<Register/>
    },
  
    {
      path:'/',
      element:<ProtectedRoute><Layout/></ProtectedRoute>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/profile/:id',
          element:<Profile/>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
