import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Nosotros from './pages/Nosotros'
import Home from './pages/Home'
import Novedades from './pages/Novedades'
import Novedad from './pages/Novedad'
import Contacto from './pages/Contacto'
import Sumate from './pages/Sumate'
import Donantes from './pages/Donantes'
import Layout from './components/publicPage/Layout'
import UploadPhoto from './pages/backoffice/UploadPhoto'
import UploadNew from './pages/backoffice/UploadNew'
import Login from './pages/Login'
import AuthContext from "./context/authContext"
import NewsContext from "./context/newsContext"
import PhotosContext from "./context/photosContext"

function App() {
  return (
    <ChakraProvider>
      <AuthContext>
        <NewsContext>
          <PhotosContext>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Layout>
                <Switch>
                  <Route path="/nosotros">
                    <Nosotros/>
                  </Route>
                  <Route path="/novedades" exact>
                    <Novedades />
                  </Route>
                  <Route path="/novedades/:id">
                    <Novedad />
                  </Route>
                  <Route path="/contacto">
                    <Contacto />
                  </Route>
                  <Route path="/sumate">
                    <Sumate />
                  </Route>
                  <Route path="/donantes">
                    <Donantes />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/backoffice/donantes">
                    <UploadPhoto />
                  </Route>
                  <Route path="/backoffice/novedades">
                    <UploadNew />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </Layout>
            </BrowserRouter>
          </PhotosContext>
        </NewsContext>
      </AuthContext>
    </ChakraProvider>
  )
}

export default App
