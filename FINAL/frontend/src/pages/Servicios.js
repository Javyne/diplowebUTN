import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';

export const Servicios = () => {
  return (
    <>
      <Main>
        <CajaTexto>
          <h3>Reparaciones</h3>
          <hr/>
          <h5>Reparamos todo tipo de defectos y fallas.</h5>
          <ul>
            <li><FaCheckCircle/> Tv LCD, Smart, LED, 4K curvos.</li>
            <li><FaCheckCircle/> Equipos de Audio.</li>
            <li><FaCheckCircle/> Microondas.</li>
          </ul>
        </CajaTexto>
        <Imagen src='../../images/it-1.jpg'/>
        <CajaTexto>
          <h3>Actualizaciones</h3>
          <hr/>
            <h5>Actualización de firmware.</h5>
            <ul>
              <li><FaCheckCircle/> Amplia gama de marcas y modelos.</li>
              <li><FaCheckCircle/> Correccion de errores. </li>
              <li><FaCheckCircle/> Mejoras de la funcionalidad.</li>
            </ul>
        </CajaTexto>
        <Imagen src='../../images/it-2.jpg'/>
        <CajaTexto>
          <h3>Control Remoto</h3>
          <hr/>
          <h5>Reparación y venta de Control Remoto.</h5>
            <ul>
              <li><FaCheckCircle/> Orginiles y Genericos.</li>
              <li><FaCheckCircle/> Amplia gama de dispositivos.</li>
              <li><FaCheckCircle/> Control remoto para portones automatizados.</li>
            </ul>
        </CajaTexto>
        <Imagen src='../../images/it-5.jpg'/>


      </Main>

    </>
  )
}

const Main = styled.div`

  display: grid;
  grid-gap: 1rem;
  grid-auto-rows: 25rem;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
`


const CajaTexto = styled.div`
  width: 30rem;
  margin: 20px;
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;


  h3{
    font-weight: 700;
  }

  li{
    color: grey;
    list-style: none;
  }

  h5{
    color: grey;
  }

  svg{
    color: var(--main);
  }
`
const Imagen = styled.img`
  width: 30rem;
  border-radius: 10px;
  margin: 20px;

`