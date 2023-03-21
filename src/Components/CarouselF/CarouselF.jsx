import Carousel from 'react-bootstrap/Carousel';

function CarouselF() {
  return (
    <Carousel variant="blue">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../Img/slider4.png"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../Img/slider1.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../Img/slider3.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselF;