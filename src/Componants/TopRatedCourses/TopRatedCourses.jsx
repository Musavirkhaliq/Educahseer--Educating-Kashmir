import React, { useEffect, useState } from "react";
import axios from 'axios';
import SliderImage1 from "/src/assets/Images/IISC Main Building.jfif";
import SliderImage2 from "/src/assets/Images/firmbee-com-gcsNOsPEXfs-unsplash.jpg";
import SliderImage3 from "/src/assets/Images/wes-hicks-4-EeTnaC1S4-unsplash.jpg";
import star_5_rating from "/src/assets/icons/5_star.png"
import StudentsIcon from "/src/assets/icons/multiple-users-silhouette.png";
import "./TopRatedCourses.css";

function TopRatedCourses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setCourses(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <section className="TopCourses">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="course-heading">
                            <h2>Top Rated Courses</h2>
                            <h5 className="mt-2">You are one step Behind:</h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 main-content flex" id="card-container">
                        {courses.map((course, index) => (
                            <div key={index} className="col-lg-3 content">
                                <img src={index === 0 ? SliderImage1 : index === 1 ? SliderImage2 : SliderImage3} className="d-block w-100" alt="..." />
                                <div class="ratings flex text-center">
                                    <div className="rating-wrapper">
                                        <span>4.3</span>
                                    </div>
                                    <div className="rating-image-wrapper ">
                                        <img src={star_5_rating} alt="" />
                                    </div>
                                </div>
                                <div class="title">{course.name}</div>
                                <div class="subtitle">Subtitle or Course Description</div>
                                <div class="viewers flex text-center align-items-center">
                                    <img src={StudentsIcon} alt="" style={{ width: "40px", height: "30px" }} />
                                    <h5 class="text-center"> <span>40k</span> enrolls</h5>
                                    <button class="button">Start <i class="fa fa-angle-right"></i></button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}

export default TopRatedCourses;

