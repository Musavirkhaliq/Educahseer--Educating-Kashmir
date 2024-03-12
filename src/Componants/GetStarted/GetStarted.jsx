import TestImage1 from "/src/assets/Images/testimonial01.png";
import user_image_2 from "/src/assets/Images/firmbee-com-gcsNOsPEXfs-unsplash.jpg";
import user_image_3 from "/src/assets/Images/wes-hicks-4-EeTnaC1S4-unsplash.jpg";
import user_image_4 from "/src/assets/Images/IISC Main Building.jfif";
import star_5_rating from "/src/assets/icons/5_star.png"
import StudentsIcon from "/src/assets/icons/multiple-users-silhouette.png";
import "./GetStarted.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"

function GetStarted() {
    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
    };
    return <>
        <section className="GetStarted center">
            <div className="container">
                <div className="row">
                    <div >
                        <div className="course-heading">
                            <h2>Get Started Sartaj,</h2>
                            <h5 class="mt-2">Pick a course:)</h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Slider {...settings}>
                        <div>
                            <div class="course-card">
                                <img src="https://source.unsplash.com/random.1" alt="Course Image" class="course-image" />
                                {/* <div class="rating">4.5/5</div> */}
                                <div class="ratings flex text-center">
                                    <div className="rating-wrapper">
                                        <span>5</span>
                                    </div>
                                    <div className="rating-image-wrapper ">
                                        <img src={star_5_rating} alt="" />
                                    </div>
                                </div>
                                <div class="title">Advaned JavaScript Course</div>
                                <div class="subtitle">Subtitle or Course Description</div>
                                <div class="viewers flex text-center align-items-center">
                                    <img src={StudentsIcon} alt="" style={{ width: "40px", height: "30px" }} />
                                    <h5 class="text-center"> <span>40k</span> enrolls</h5>
                                    <Link to="/src/Componants/Pages/VideoPlay/VideoContent.jsx"> <button class="button">Start <i class="fa fa-angle-right"></i></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="course-card">
                                <img src="https://source.unsplash.com/random.3" alt="Course Image" class="course-image" />
                                {/* <div class="rating">4.5/5</div> */}
                                <div class="ratings flex text-center">
                                    <div className="rating-wrapper">
                                        <span>4.5</span>
                                    </div>
                                    <div className="rating-image-wrapper ">
                                        <img src={star_5_rating} alt="" />
                                    </div>
                                </div>
                                <div class="title">Advaned JavaScript Course</div>
                                <div class="subtitle">Subtitle or Course Description</div>
                                <div class="viewers flex text-center align-items-center">
                                    <img src={StudentsIcon} alt="" style={{ width: "40px", height: "30px" }} />
                                    <h5 class="text-center"> <span>40k</span> enrolls</h5>
                                    <button class="button">Start <i class="fa fa-angle-right"></i></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="course-card">
                                <img src="https://source.unsplash.com/random.7" alt="Course Image" class="course-image" />
                                {/* <div class="rating">4.5/5</div> */}
                                <div class="ratings flex text-center">
                                    <div className="rating-wrapper">
                                        <span>4.3</span>
                                    </div>
                                    <div className="rating-image-wrapper ">
                                        <img src={star_5_rating} alt="" />
                                    </div>
                                </div>
                                <div class="title">Advaned JavaScript Course</div>
                                <div class="subtitle">Subtitle or Course Description</div>
                                <div class="viewers flex text-center align-items-center">
                                    <img src={StudentsIcon} alt="" style={{ width: "40px", height: "30px" }} />
                                    <h5 class="text-center"> <span>40k</span> enrolls</h5>
                                    <button class="button">Start <i class="fa fa-angle-right"></i></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="course-card">
                                <img src="https://source.unsplash.com/random.4" alt="Course Image" class="course-image" />
                                {/* <div class="rating">4.5/5</div> */}
                                <div class="ratings flex text-center">
                                    <div className="rating-wrapper">
                                        <span>4.2</span>
                                    </div>
                                    <div className="rating-image-wrapper ">
                                        <img src={star_5_rating} alt="" />
                                    </div>
                                </div>
                                <div class="title">Advaned JavaScript Course</div>
                                <div class="subtitle">Subtitle or Course Description</div>
                                <div class="viewers flex text-center align-items-center">
                                    <img src={StudentsIcon} alt="" style={{ width: "40px", height: "30px" }} />
                                    <h5 class="text-center"> <span>40k</span> enrolls</h5>
                                    <button class="button">Start <i class="fa fa-angle-right"></i></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="course-card">
                                <img src="https://source.unsplash.com/random.8" alt="Course Image" class="course-image" />
                                {/* <div class="rating">4.5/5</div> */}
                                <div class="ratings flex text-center">
                                    <div className="rating-wrapper">
                                        <span>4</span>
                                    </div>
                                    <div className="rating-image-wrapper ">
                                        <img src={star_5_rating} alt="" />
                                    </div>
                                </div>
                                <div class="title">Advaned JavaScript Course</div>
                                <div class="subtitle">Subtitle or Course Description</div>
                                <div class="viewers flex text-center align-items-center">
                                    <img src={StudentsIcon} alt="" style={{ width: "40px", height: "30px" }} />
                                    <h5 class="text-center"> <span>40k</span> enrolls</h5>
                                    <button class="button">Start <i class="fa fa-angle-right"></i></button>
                                </div>
                            </div>
                        </div>



                    </Slider>

                </div>
            </div>
        </section ></>
}

export default GetStarted;







