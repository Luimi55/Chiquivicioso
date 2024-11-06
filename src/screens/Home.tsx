import React from 'react'
import Slider from '../components/Slider'
import Biography from '../components/BiographySection'
import Container from 'react-bootstrap/Container';
import ArtSection from '../components/ArtSection';
import ArticleSection from '../components/ArticleSection';
import QuoteSection from '../components/QuoteSection';
import Footer from '../components/Footer';

type Props = {}

const Home = (props: Props) => {
  return (
    <Container className='generalContainer'>
      <Slider/>
      <Biography/>
      <ArtSection/>
      <QuoteSection/>
      <ArticleSection/>
      <Footer/>
    </Container>
  )
}

export default Home