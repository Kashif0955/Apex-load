import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are imported


function UncontrolledExample() {
  return (
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/assets/images/carousel1.jpg" // Your image path
          alt="First slide"
        />
        <Carousel.Caption className="caption-container">
          <h3 className="caption-title">Discover Beautiful Places</h3>
          <p className="caption-text">Explore the world's most stunning destinations and create unforgettable memories.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/assets/images/carousel2.png" // Your image path
          alt="Second slide"
        />
        <Carousel.Caption className="caption-container">
          <h3 className="caption-title">Adventure Awaits</h3>
          <p className="caption-text">Join us for thrilling adventures that will challenge and inspire you.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/assets/images/loaded.png" // Your image path
          alt="Third slide"
        />
        <Carousel.Caption className="caption-container">
          <h3 className="caption-title">Culinary Journeys</h3>
          <p className="caption-text">Savor the flavors of the world with our curated culinary experiences.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/assets/images/bluevolvo.png" // Your image path
          alt="Fourth slide"
        />
        <Carousel.Caption className="caption-container">
          <h3 className="caption-title">Travel in Style</h3>
          <p className="caption-text">Experience luxury travel with our exclusive packages tailored for you.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
