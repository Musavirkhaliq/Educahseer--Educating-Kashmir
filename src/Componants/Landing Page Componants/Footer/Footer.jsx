import FooterLogoImg from "/src/assets/icons/LOGO RM Demo.png";
import SocialFbIcon from "/src/assets/icons/facebook.svg"
import SocialTWIcon from "/src/assets/icons/twitter.svg"
import SocialINtaIcon from "/src/assets/icons/Instagram.svg"
import "./Footer.css"

function Footer() {
  return (
    <>
      <footer>
        <div class="contain">
          <div class="box">
            <h3>
              About Us <sub>(EduCasheer)</sub>
            </h3>
            <p>
              Welcome to EduCasheer, the cutting-edge Learning Management System
              (LMS) that is revolutionizing the way we engage with education.
              Dive into a world where learning is not just a process but an
              immersive and dynamic experience, designed with you in mind.
            </p>
            <button class="btn btn-primary">Read More</button>
          </div>

          <div class="box">
            <h3>Quik Links</h3>
            <ul>
              <li>
                <a href=" #home" class="active">
                  Home
                </a>
              </li>
              <li>
                {" "}
                <a href="#studeMaterial">Study Material</a>
              </li>
              <li>
                <a href="#courses">Courses</a>
              </li>
              <li>
                <a href="#catagories">Catagories</a>
              </li>
              <li>
                <a href="#RoadMaps">Road Maps</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
              <li>
                <a href="#contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="box follow text-center">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="#">
                  {" "}
                  <img src={SocialFbIcon} alt="" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={SocialTWIcon} alt="" />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i class="fa-brands fa-linkedin"></i>
                  <span>Linked In</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src={SocialINtaIcon} alt="" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  <i class="fa-brands fa-github"></i>
                  <span>GITHUB</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="rular" />
        <div class="copyright ">
          <div class="container flex text-center justify-center">
            <img src={FooterLogoImg} alt="" />
            <div>
              <p>EduCasheer is licensed under the @Musa.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
