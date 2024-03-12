import React from 'react';
import { Link } from "react-router-dom"

function SignUp() {
    return <>
        <section className="Login">
            <div className="container ">
                <div class="content flex justify-content-center align-items-center">

                    <div class="form">
                        <div className="form-heading">
                            <h2>Welcome to <span >EduCasheer</span> </h2>
                        </div>
                        <div className="buttons flex">
                            <button className="btn">  Login</button>
                            <button className="btn ">SignUp</button>

                        </div>
                        <div className="inputs">
                            <label htmlFor="password">Full Name</label>
                            <input type="text" placeholder="Enter your password." required />
                            <label htmlFor="email">Email ID</label>
                            <input type="email" name="email" placeholder="Example@gmail.com" required />
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Choose a password." required />
                        </div>
                        <div className="signUp-links my-3">
                            <button class="btn btnn">Sign Up</button>
                            <p class="link">Already have an account?
                                <a href="#">Login</a>
                            </p>
                        </div>
                        <div className="bottom">
                            <p> Or </p>
                            <button type="button" class="btn btn-outline-primary"  >Continue with Google</button>

                        </div>

                    </div>
                </div>

            </div>
        </section>

    </>
}
export default SignUp;
