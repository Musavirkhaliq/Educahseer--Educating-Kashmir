import "./styless.css"
export default function LogSIgn() {
    return <>

        <section className="Login" id="login">
            <div className="container ">
                <div class="content flex justify-content-center align-items-center">
                    <div class="form">
                        <div className="form-heading">
                            <h2>Welcome to <span >EduCasheer</span> </h2>
                        </div>
                        <div className="buttons flex">
                            <button className="btn"> Login</button>
                            <button className="btn ">SignUp</button>
                        </div>
                        <div className="inputs">
                            <label htmlFor="email">Email ID</label>
                            <input type="email" name="email" placeholder="Example@gmail.com" required />
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Enter your password." required />
                        </div>
                        <div className="signUp-links">
                            <p class="forget-password"><a href="#">Forget Password?</a></p>
                            <button class="btn btnn">Login</button>
                            <p class="link">Don't have an account?
                                <link rel="stylesheet" />
                                <a href="#">Sign up</a>
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
