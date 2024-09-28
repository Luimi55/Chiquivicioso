import React from 'react'
import ScreenTitle from '../components/ScreenTitle'
import image1 from "/img/Vicioso-BW-600x600.png";
import Container from "react-bootstrap/Container";
import artData from '../data/arts.json'
import ArtGroup from '../components/ArtGroup';

type Props = {}

const Art = (props: Props) => {
  return (
    <Container className="generalContainer">
        <ScreenTitle title='Obras' image={image1}/>
        <ArtGroup classname='p-5' arts={artData} light={false}/>
    </Container>
  )
}

export default Art