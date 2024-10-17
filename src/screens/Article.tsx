import React from 'react'
import image1 from "/img/Vicioso-BW-600x600.png";
import Container from 'react-bootstrap/Container';
import ScreenTitle from '../components/ScreenTitle';

type Props = {}

const Article = (props: Props) => {
  return (
    <Container className='generalContainer'>
        <ScreenTitle title='Articulos' image={image1}/>
    </Container>
  )
}

export default Article