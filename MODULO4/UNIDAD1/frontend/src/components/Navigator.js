import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';


export const Navigator = () => {

    const pagina = useLocation().pathname;

    return (
        <>
            <Nav>
                <div>
                    <Img src={NavLinkLogo(pagina)}/>
                </div>
                <LinksDiv >
                    <NavLinks pagina={ pagina } to='/'>Home</NavLinks>
                    <NavLinks pagina={ pagina } to='/servicios'>Servicios</NavLinks>
                    <NavLinks pagina={ pagina } to='/contacto'>Contacto</NavLinks>
                    <NavLinks pagina={ pagina } to='/faq'>F.A.Q</NavLinks>
                    <NavLinks pagina={ pagina } to='/misrep'>Mis Reparaciones</NavLinks>
                </LinksDiv>
            </Nav>
        </>
    )
}


const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content:space-around;
`

const LinksDiv = styled.div`
    display: flex;
    justify-content: space-around;
`

const NavLinks = styled(Link)`
    text-decoration: none;
    color: ${link => NavLinkColor(link.to).color};
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    margin-left: 70px;

    &:hover{
        color: ${link => NavLinkColor(link.to).hover};
    }

`
const Img = styled.img`
    height: 70px;
    margin-top: 10px;
`

const NavLinkColor = (linkName) =>{
    const pagina = useLocation().pathname;
    
    if(pagina === '/'){
        return ({color:'var(--claro)',hover:'var(--oscuro)'});
    }
    else if(pagina === linkName){
        return ({color:'var(--main)',hover:'var(--oscuro)'});
    }
    else
    {
        return ({color:'var(--oscuro)',hover:'var(--main)'});
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