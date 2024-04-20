import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Auth } from './pages/Auth.jsx'
import { Login } from './components/organism/Auth/Login.jsx'
import { Register } from './components/organism/Auth/Register.jsx';
import { ForgetPassword } from './components/organism/Auth/ForgetPassword.jsx';
import { ResetPassword } from './components/organism/Auth/ResetPassword.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { Camera } from './components/organism/Dashboard/Camera.jsx'
import { Doors } from './components/organism/Dashboard/Doors.jsx'
import { Gate } from "./components/organism/Dashboard/Gate.jsx";
import { Light } from "./components/organism/Dashboard/Light.jsx";
import { MainMenu } from "./components/organism/Dashboard/MainMenu.jsx";
import { RegisterDevice } from './components/organism/Dashboard/RegisterDevice.jsx'
import { SelectDevice } from './components/organism/Dashboard/SelectDevice.jsx';
import { TemperatureAndHumidity } from './components/organism/Dashboard/TemperatureAndHumidity.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path : '',
        element : <Login/>
      },
      {
        path : '/register',
        element : <Register/>
      },
      {
        path : '/forget-password',
        element : <ForgetPassword />
      },
      {
        path : '/reset-password',
        element : <ResetPassword />
      }
    ],
  },
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path : '/Camera',
        element : <Camera/>
      },
      {
        path : '/Doors',
        element : <Doors/>
      },
      {
        path : '/Gate',
        element : <Gate/>
      },
      {
        path : '/Light',
        element : <Light/>
      },
      {
        path : '/MainMenu',
        element : <MainMenu/>
      },
      {
        path : '/RegisterDevice',
        element : <RegisterDevice/>
      },
      {
        path : '/SelectDevice',
        element : <SelectDevice/>
      },
      {
        path : '/TemperatureAndHumidity',
        element : <TemperatureAndHumidity/>
      },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
