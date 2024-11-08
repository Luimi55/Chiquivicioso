import Container from "react-bootstrap/Container";
import ScreenTitle from "../components/ScreenTitle";
import image1 from "/img/Vicioso-BW-600x600.png";
import multimedias from "../data/multimedia.json"
import MultimediaGroup from "../components/MultimediaGroup";

type Props = {}

const Multimedia = (props: Props) => {
  return (
    <Container className="generalContainer">
        <ScreenTitle image={image1} title="Multimedia" />
        <MultimediaGroup classname='mt-5' multimedias={multimedias}/>
    </Container>
  )
}

export default Multimedia