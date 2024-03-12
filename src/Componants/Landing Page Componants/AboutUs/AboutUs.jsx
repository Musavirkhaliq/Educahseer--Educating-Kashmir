import AboutUseImage from "/src/assets/Images/kenny-eliason-1-aA2Fadydc-unsplash.jpg";
import TickMarkIcon from "/src/assets/icons/check-mark.png"
import "./AboutUs.css"
function AboutUs() {
  return (
    <>
      <section class="about-us">
        <hr />
        <div class="container">
          <div class="about-wrapper flex">
            <div class="about-image">
              <img src={AboutUseImage} alt="" />
            </div>
            <div class="b-heading">
              <h1>About Us</h1>
              <h3>Over 5+ Years in <span> Distant Learning</span> for Skill Development</h3>
              <div class="text-info">
                <p>
                  Welcome to EduCasheer, the cutting-edge Learning Management
                  System (LMS) that transforms traditional education into an
                  immersive and dynamic experience. EduCasheer is designed to be
                  user-friendly, mobile-compatible, and feature-rich, offering a
                  personalized learning journey for every user.
                </p>
                <ul>
                  <li><img class="checkMarkAbout" src={TickMarkIcon} alt="" />Expert Trainers.</li>
                  <li><img class="checkMarkAbout" src={TickMarkIcon} alt="" />Online Remote Learning.</li>
                  <li><img class="checkMarkAbout" src={TickMarkIcon} alt="" />Custamized Courses.</li>
                  <li><img class="checkMarkAbout" src={TickMarkIcon} alt="" />Custamized Courses.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
