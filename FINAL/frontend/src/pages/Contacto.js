import styled from 'styled-components';
import { BsGeoAlt, BsTelephone, BsWhatsapp, BsMailbox } from 'react-icons/bs';
import { Mapa, MailForm } from '../components';

export const Contacto = () => {

  return (
    <>
      <Main>
        <Formulario>
          <MailForm/>
        </Formulario>
        <Data>
          <div className="mapa">
              <Mapa isMarkerShown/>
          </div>
          <div className="datos">
            <h5>Av. Avellaneda</h5>
            <p><BsGeoAlt /> Av. Avellaneda 45, CABA C1405CNA, Buenos Aires, Argentina</p>
            <p><BsTelephone /> Telefono: (011) 4981-2141</p>
            <p><BsWhatsapp /> WhatsApp: (+54) 11-5323-3702</p>
            <p><BsMailbox /> e-mail: jl_grana@hotmail.com</p>
          </div>
          <div className="datos">
            <h5>Calle Gurruchaga</h5>
            <p><BsGeoAlt /> Calle Gurruchaga 558, CABA C1414DHK, Buenos Aires, Argentina</p>
            <p><BsTelephone /> Telefono: (011) 4856-9427</p>
            <p><BsWhatsapp /> WhatsApp: (+54) 11-5323-3702</p>
          </div>
        </Data>
      </Main>
    </>
  )
}

const Main = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Formulario = styled.div`
  border-right: 1px solid #ccc;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }

`
const Data = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }

  .mapa{
    width: 90%;
    margin-left: 5%;
    text-align: center;
    color:red;
  }

  .datos{
    width: 80%;
    margin-left: 10%;

    p{
      color: grey;
      font-style: italic;

      svg{
        color:var(--main);
      }
    }
  }


`
