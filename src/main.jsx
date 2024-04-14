import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import GettingStarted from './pages/Gettingstarted.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <GettingStarted />
    </ChakraProvider>
  </React.StrictMode>,
)
