import React from "react";
import { Container } from "react-bootstrap";
import ScreenTitle from "../components/ScreenTitle";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import image1 from "/img/Vicioso-BW-600x600.png";
import image2 from "/img/CHIQUI JOVEN.png"
import image3 from "/img/Flor dibujo.png"
import image4 from "/img/CHIQUI-JOVEN 2.jpg"

type Props = {};

const Biography = (props: Props) => {
  return (
    <Container className="generalContainer">
      <ScreenTitle image={image1} title="Biografía" />
      <Container className="biographyContent">
        <Row>
          <Col xs={12} sm={6}>
            <Image
              src={image4}
              // width={620}
              // height={370}
              fluid
              className="position-relative"
            />
          </Col>
          <Col xs={12} sm={6}>
            <p>
            <b>Sherezada Chiqui Vicioso</b> es una escritora dominicana. Más conocida por su sobrenombre Chiqui, 
cursó sus estudios en Estados Unidos y Brasil. Licenciada en Sociología e Historia de América Latina por el Brooklyn College, de 
Nueva York, Maestría en Educación por la Universidad de Columbia y Postgrado en Administración Cultural por la Fundación Getúlio 
Vargas (Brasil). 
            </p>
            <p>
            Ha sido reconocida con el galardón Anacaona de Oro en Literatura y la Medalla de Oro al Mérito a la Mujer en 1992.
Con obras destacadas como <b>Volver a vivir: ensayos sobre Nicaragua, Wish-ky Sour, Salomé Ureña de Henríquez (1859-1897): a cien años
 de su magisterio</b>.
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12}>

          <p>Hija de <b>Juan Antonio Vicioso Contín y María Luisa Sánchez</b>. Licenciada en Sociología e Historia de América Latina por The City University of New York (Brooklyn College). Hizo una maestría en 
Diseño de Programas Educativos en la Universidad de Columbia y estudió Administración de Proyectos Culturales en la Fundación 
Getúlio Vargas, de Río de Janeiro, Brasil.</p>
          
<p>
Fue <b>Directora de Educación de Pro Familia (1981-1985), Consultora del Programa de la ONU para el Desarrollo de la Mujer (1986-1987)
 y Oficial Nacional de Programas con la Mujer de UNICEF</b>. Ha sido columnista del periódico Listín Diario, colaboradora de La Noticia
 y dirigió la página literaria Cantidad hechizada, de El Nuevo Diario.
</p>

          </Col>
        </Row>
        <Row className="mt-4">
        <Col xs={12} className="d-flex justify-content-center">
        <Image
              src={image2}
              fluid
            />
        </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12}>
          <p>
          Al inicio de la década de los ochenta fundó el <b>Círculo de Mujeres Poetas</b>. En 1988 la Sociedad Dominicana de Escritores le concedió
 el prestigioso Caonabo de Oro y posteriormente, en 1992, la <b>Dirección General de Promoción de la Mujer le entregó la Medalla de Oro
 al Mérito a la Mujer más Destacada del Año</b>. El 21 de abril de 2004 ganó <b>La Orden de Don Quijote, el más alto honor conferido por Sigma Delta Pi,</b>
  reconoce el servicio excepcional y meritorio en los campos de la erudición hispánica, la enseñanza del español y la promoción de las buenas relaciones
  entre los países de habla inglesa y los de habla española.
          </p>

          <p>
          Parte de su producción poética ha sido incluida en Sin otro profeta que su canto <b>Antología de la poesía femenina dominicana</b> y en
          Poemas del exilio y de otras inquietudes /Poems of exile and other concerns Antología bilingüe de la poesía escrita por dominicanos
          en los Estados Unidos, ambas preparadas por Daisy Cocco De Filippis. También aparecen textos suyos en <b>Antología histórica de la 
          poesía dominicana del siglo XX</b>, de Franklin Gutiérrez y en Dos siglos de literatura dominicana, de Manuel Rueda. En 1997 obtuvo el 
          Premio Nacional de Teatro con la obra Wish-ky Sour.
          </p>

          </Col>
        </Row>
        {/* <Image src={image3} className="biographyOverlayImage"/> */}
      </Container>
    </Container>
  );
};

export default Biography;
