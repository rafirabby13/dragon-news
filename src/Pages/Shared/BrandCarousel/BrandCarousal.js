import React from "react";
import Carousel from "react-bootstrap/Carousel";
import br1 from "../../../assets/Brands/br1.png";
import br2 from "../../../assets/Brands/br2.png";

const BrandCarousal = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={br1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={br2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarousal;
