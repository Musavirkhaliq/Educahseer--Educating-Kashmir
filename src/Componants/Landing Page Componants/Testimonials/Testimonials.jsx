import TestImage1 from "/src/assets/Images/testimonial01.png";
import user_image_2 from "/src/assets/Images/firmbee-com-gcsNOsPEXfs-unsplash.jpg";
import user_image_3 from "/src/assets/Images/wes-hicks-4-EeTnaC1S4-unsplash.jpg";
import user_image_4 from "/src/assets/Images/IISC Main Building.jfif";
import React from "react";
import "./testimonial.css";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section className="Testimonials">
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial-wrapper flex justify-between  align-items-center ">
              <div className="testimonial-img w-50">
                <img src={TestImage1} alt="" className="w-100" />
              </div>

              <div className="testimonial-content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single-testimonial">
                      <div className="user-image">
                        <img src={user_image_2} alt="" />
                      </div>
                      <div className="student-info mt-2 text-center">
                        <h6 className="fw-bold">Sartaj Ashraf</h6>
                        <p>California, United State</p>
                      </div>
                      <h5 className=" mb-3 fw-bold">
                        Excellent course of materials
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis saepe id voluptas molestiae. Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="single-testimonial">
                      <div className="user-image">
                        <img src={user_image_3} alt="" />
                      </div>
                      <div className="student-info mt-4 text-center">
                        <h6 className="fw-bold">Sartaj Ashraf</h6>
                        <p>California, United State</p>
                      </div>
                      <h5 className=" mb-3 fw-bold">
                        Excellent course of materials
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis saepe id voluptas molestiae. Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="singlet-testimonial">
                      <div className="user-image">
                        <img src={user_image_4} alt="" />
                      </div>
                      <div className="studenet-info mt-4 text-center">
                        <h6 className="fw-bold">Sartaj Ashraf</h6>
                        <p>California, United State</p>
                      </div>
                      <h5 className=" mb-3 fw-bold">
                        Excellent course of materials
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis saepe id voluptas molestiae. Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>
                    </div>
                  </div>

                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;

