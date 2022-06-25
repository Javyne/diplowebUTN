import React from 'react'
import styled from 'styled-components';
import { Home, Navigator, Faq, Servicios, Contacto, MisRep} from '../components';
import {Routes, Route, useLocation} from 'react-router-dom';
import {appBackGround} from '../helpers/appBackGround';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AppRoutes = () => {

    const pagina = useLocation().pathname;

  return ( 
        
        <AppPage fondo = {appBackGround(pagina)}>
            <AppNav>
                <Navigator />
                <Linea/>
            </AppNav>
            <AppContain>
                <Routes>  
                    <Route exact path="/servicios" element={<Servicios />}/>
                    <Route exact path="/misrep" element={<MisRep />}/> 
                    <Route exact path="/contacto" element={<Contacto />}/>
                    <Route exact path="/faq" element={<Faq />}/>
                    <Route path="/*" element={<Home />} /> 
                </Routes>
            </AppContain>
        </AppPage>

  )
}


const AppPage = styled.div`
    font-family: 'Lato', sans-serif;
    background: ${props => props.fondo};
    background-size: cover;
    min-height: 100vh;
`

const AppNav = styled.div`

`

const AppContain = styled.div`

`
const Linea = styled.hr`
    width: 80%;
    margin-left: 10%;
    
`