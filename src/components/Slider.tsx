import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from 'react-bootstrap/Image';
import image1 from '../../public/img/WhatsApp Image 2024-09-09 at 17.40.15_65bdda0b.jpg'
import image2 from '../../public/img/35082742_1075765449228968_2894998435008610304_n.jpg'
import image3 from '../../public/img/Vicioso-BW-600x600.png'

type Props = {};

const Slider = (props: Props) => {
  return (
    <div>
      <Carousel 
        fade
        className="w-100 sliderheight"
      >
        <Carousel.Item>
            <Image 
                src={image1}
                className="d-block w-100 centerImage1Height"
            />
        </Carousel.Item>
        <Carousel.Item>
            <Image 
                src={image2}
                className="d-block w-100 centerImage2Height"
            />
        </Carousel.Item>
        <Carousel.Item>
            <Image src={image3}
            className="d-block w-100 centerImage3Height"
            />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
