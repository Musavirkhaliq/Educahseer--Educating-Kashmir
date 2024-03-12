import React from "react";
import "./Contact.css"

function Contact() {
  return (
    <>
      <section id="contact-us" class="contact-us">
        <div class="container-con-wrapper">
          <div class="content">
            <h2>Contact Us</h2>
          </div>
          <div class="container-contact">
            <div class="contact-info">
              <div class="box">
                <div class="icon">
                  <i class="fa fa-address-card"></i>
                </div>
                <div class="text">
                  <h3>Address</h3>
                  <p>Abc road J&K, Zip-code 190001</p>
                </div>
              </div>
              <div class="box">
                <div class="icon">
                  <i class="fa fa-phone"></i>
                </div>
                <div class="text">
                  <h3>Phone</h3>
                  <p> +91#######</p>
                </div>
              </div>
              <div class="box">
                <div class="icon">
                  <i class="fa fa-envelope-o"></i>
                </div>
                <div class="text">
                  <h3>Email</h3>
                  <p>example@gmail.com</p>
                </div>
              </div>
            </div>
            <div class="contact-form">
              <form>
                <h2>Send Message</h2>
                <div class="inputBox">
                  <input type="text" name="" id="" required="Requrired" />
                  <span> Full Name</span>
                </div>
                <div class="inputBox">
                  <input type="text" name="" id="" required="Requrired" />
                  <span> Email Address</span>
                </div>
                <div class="inputBox">
                  <textarea name="message" id="" required="Required"></textarea>
                  <span>Type your message</span>
                </div>
                <div class="inputBox">
                  <input type="submit" name="submit" id="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
