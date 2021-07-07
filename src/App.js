import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter,Switch,Route } from "react-router-dom"
import Header from './components/publicPage/Header'
import Nosotros from './pages/Nosotros'
import Home from './pages/Home'
import Novedades from './pages/Novedades'
import Contacto from './pages/Contacto'
import Sumate from './pages/Sumate'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/nosotros">
              <Nosotros/>
            </Route>
            <Route path="/novedades">
              <Novedades />
            </Route>
            <Route path="/contacto">
              <Contacto />
            </Route>
            <Route path="/sumate">
              <Sumate />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
