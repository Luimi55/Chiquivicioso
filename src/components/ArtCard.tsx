import Image from 'react-bootstrap/Image';
import Col from "react-bootstrap/Col";
import Art from '../models/Art';

type Props = {
  art: Art,
  light: boolean
}

const ArtCard = (props: Props) => {
  const {art, light} = props
  return (
    <Col>
      <a 
        className='d-flex flex-column align-items-center' 
        target="_blank" 
        style={{textDecoration:'none'}} 
        href={'/Chiquivicioso'+art.pdf}
      >
        <Image src={'/Chiquivicioso'+art.image} width={180} height={300}/>
        <p className={`text-${light ? "light":"dark"} text-center`}>{art.caption}</p>
      </a>
    </Col>
  )
}

export default ArtCard