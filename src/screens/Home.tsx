import React from 'react'
import Slider from '../components/Slider'
import Biography from '../components/Biography'
import Container from 'react-bootstrap/Container';
import Art from '../components/Art';

type Props = {}

const Home = (props: Props) => {
  return (
    <Container>
      <Slider/>
      <Biography/>
      <Art/>
    </Container>
  )
}

export default Home