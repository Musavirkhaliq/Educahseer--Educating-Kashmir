import SliderImage1 from "/src/assets/Images/IISC Main Building.jfif";
import SliderImage2 from "/src/assets/Images/firmbee-com-gcsNOsPEXfs-unsplash.jpg";
import SliderImage3 from "/src/assets/Images/wes-hicks-4-EeTnaC1S4-unsplash.jpg";
import { Link } from "react-router-dom";
import "./Hero.css"
function Hero() {
  return (
    <>
      <main>
        <section class="hero" id="home">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleSlidesOnly"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleSlidesOnly"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleSlidesOnly"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active c-item" data-bs-interval="4000">
                <img
                  src={SliderImage1}
                  class="d-block w-100  c-img"
                  alt="..."
                />
                <div class="carousel-caption top-0 d-md-block c-captions center-items ">
                  <h5 class="c-heading">
                    Innovative <span>Learning Management</span> System (LMS)
                  </h5>

                  <p class="text-uppercase c-small">
                    Bridging Gaps, Inspiring Minds: Explore Our Suite of
                    Educational Solutions .
                  </p>
                  <Link to="/src/Componants/Pages/VideoSection/VideoSection.jsx"><button class="btn btn-primary">Explore Courses</button></Link>

                </div>
              </div>
              <div class="carousel-item  c-item" data-bs-interval="3000">
                <img src={SliderImage2} class="d-block w-100 c-img" alt="..." />
                <div class="carousel-caption top-0 d-md-block c-captions">
                  <h5 class="c-heading">
                    Empowering <span>Education </span>Through{" "}
                    <span>Technology</span>
                  </h5>
                  <p>
                    Elevate Learning Experiences with Cutting-edge Educational
                    Technology.
                  </p>



                  <Link to="/src/Componants/Pages/VideoSection/VideoSection.jsx"><button class="btn btn-primary">Explore Courses</button></Link>

                </div>
              </div>
              <div class="carousel-item c-item" data-bs-interval="3000">
                <img src={SliderImage3} class="d-block w-100 c-img" alt="..." />
                <div class="carousel-caption top-0 d-md-block  c-captions">
                  <h5 class="c-heading">
                    <span>Digital Tools</span> for Academic Excellence
                  </h5>
                  <p>
                    Revolutionize Learning with Innovative Ed Tech Solutions
                  </p>
                  {/* <button class="btn btn-primary">Explore Courses</button> */}
                  <Link to="/src/Componants/Pages/VideoSection/VideoSection.jsx" ><button class="btn btn-primary">Explore Courses</button></Link>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleSlidesOnly"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleSlidesOnly"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </main >
    </>
  );
}

export default Hero;
