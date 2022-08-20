import React from 'react'
import styled from 'styled-components';
import { Navigator } from '../components';
import { Home, Faq, Servicios, Contacto, MisRep } from '../pages';
import { Routes, Route, useLocation } from 'react-router-dom';
import { appBackGround } from '../helpers/appBackGround';
import {Grid} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AppRoutes = () => {

    const pagina = useLocation().pathname;

    return (

        <AppPage container fondo={appBackGround(pagina)}>
            <AppNav item xs={12}>
                <Navigator />

            </AppNav>
            <AppContain item xs={12}>
                <Routes>
                    <Route exact path="/servicios" element={<Servicios />} />
                    <Route exact path="/misrep" element={<MisRep />} />
                    <Route exact path="/contacto" element={<Contacto />} />
                    <Route exact path="/faq" element={<Faq />} />
                    <Route path="/*" element={<Home />} />
                </Routes>
            </AppContain>
        </AppPage>

    )
}


const AppPage = styled(Grid)`
    font-family: 'Lato', sans-serif;
    background: ${props => props.fondo};
    background-size: cover;
`

const AppNav = styled(Grid)`
    position: sticky;
    top: 0;  

`

const AppContain = styled(Grid)`

`
