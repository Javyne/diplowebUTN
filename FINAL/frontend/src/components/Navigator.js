import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';
import {Grid} from '@mui/material';


export const Navigator = () => {

    const pagina = useLocation().pathname;

    return (
        <>
            <Nav container>
                <Grid item xs={3}>
                    <Img src={NavLinkLogo(pagina)}/>
                </Grid>
                <LinksDiv item xs={4}>
                    <NavLinks pagina={ pagina } to='/'>Home</NavLinks>
                    <NavLinks pagina={ pagina } to='/servicios'>Servicios</NavLinks>
                    <NavLinks pagina={ pagina } to='/contacto'>Contacto</NavLinks>
                    <NavLinks pagina={ pagina } to='/faq'>F.A.Q</NavLinks>
                    <NavLinks pagina={ pagina } to='/misrep'>Mis Reparaciones</NavLinks>
                </LinksDiv>
                <Grid item xs={12}>
                    <Linea />
                </Grid>
            </Nav>
        </>
    )
}


const Nav = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content:space-around;
    background-color: ${link => PageColors(link.to).backColor};
`

const LinksDiv = styled(Grid)`
    display: flex;
    justify-content: space-around;
`

const NavLinks = styled(Link)`
    text-decoration: none;
    color: ${link => PageColors(link.to).color};
    font-family: 'Lato', sans-serif;
    font-weight: 700;

    &:hover{
        color: ${link => PageColors(link.to).hover};
    }

`
const Img = styled.img`
    height: 70px;
    margin-top: 10px;
`

const Linea = styled.hr`
    width: 80%;
    margin-left: 10%;
    
`

const PageColors = (linkName) =>{
    const pagina = useLocation().pathname;
    
    if(pagina === '/'){
        return ({color:'var(--claro)',hover:'var(--oscuro)', backColor:''});
    }
    else if(pagina === linkName){
        return ({color:'var(--main)',hover:'var(--oscuro)', backColor:'var(--claro)'});
    }
    else
    {
        return ({color:'var(--oscuro)',hover:'var(--main)', backColor:'var(--claro)'});
    }
}

const NavLinkLogo = (linkName) =>{
    
    if(linkName === '/'){
        return ('../../images/STIBlanco.png');
    }
    else
    {
        return ('../../images/STINegro.png');
    }
}