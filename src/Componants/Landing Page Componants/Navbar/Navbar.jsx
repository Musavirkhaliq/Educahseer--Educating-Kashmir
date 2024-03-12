import mailicon from "/src/assets/icons/mail.png";
import phoneicon from "/src/assets/icons/phone.svg";
import companyLogo from "/src/assets/icons/LOGO RM Demo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header >
        <nav>
          <div class="top-nav">
            <div class="container flex justify-between center-items">
              <div class="contact flex center-items">
                <img src={mailicon} alt="phone icon" />
                <div>
                  <h5>Email Address</h5>
                  <h6>example@gmail.com</h6>
                </div>
              </div>
              <div class="branding">
                <img src={companyLogo} alt="" />
              </div>
              <div class="time flex  center-items">
                <img src={phoneicon} alt="phone icon" />
                <div>
                  <h5>One on One counselling</h5>
                  <h6>Mon - Sat (+91 7889######)</h6>
                </div>
              </div>
            </div>
          </div>
          <div id="home" class="navbar">
            <div class="container">
              <ul class=" links flex justify-center">
                <li>
                  <Link to="/src/Componants/Pages/HomePage/HomePage.jsx">
                    <a href="#home" >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="">
                    Study Material <i class="fa fa-angle-down"></i>
                  </a>
                  <div class="sub-menu-1">
                    <ul>
                      <li><a href="#">Mission</a></li>
                      <li><a href="#">Team</a></li>
                      <li><a href="#">Vision</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="">
                    Courses <i class="fa fa-angle-down"></i>
                  </a>
                  <div class="sub-menu-1">
                    <ul>
                      <li><a href="#">Mission</a></li>
                      <li><a href="#">Team</a></li>
                      <li><a href="#">Vision</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="">
                    Catagories <i class="fa fa-angle-down"></i>
                  </a>
                  <div class="sub-menu-1">
                    <ul>
                      <li><a href="#">Mission</a></li>
                      <li><a href="#">Team</a></li>
                      <li><a href="#">Vision</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="">
                    Road Maps <i class="fa fa-angle-down"></i>
                  </a>
                  <div class="sub-menu-1">
                    <ul>
                      <li><a href="#">Mission</a></li>
                      <li><a href="#">Team</a></li>
                      <li><a href="#">Vision</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#blogs">Blogs</a>
                </li>
                <li>
                  <a href="#contact-us">Contact Us</a>
                </li>
              </ul>
              <div class="login-signup">
                <div class="wrapper">
                  <button class="btn btn1">LogIn</button>

                  <button class="btn btn2">SignUp</button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
