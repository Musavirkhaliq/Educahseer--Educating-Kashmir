import BlogImage1 from "/src/assets/Images/firmbee-com-gcsNOsPEXfs-unsplash.jpg";
import BlogImage2 from "/src/assets/Images/IISC Main Building.jfif";
import BlogImage3 from "/src/assets/Images/kenny-eliason-1-aA2Fadydc-unsplash.jpg";
import BlogImage4 from "/src/assets/Images/wes-hicks-4-EeTnaC1S4-unsplash.jpg";
import "./Blogs.css"

function Blogs() {
  return (
    <>
      <section class="blogs" id="blogs">
        <div class="container">
          <h1>Blogs</h1>
          <div class="blog-wapper flex">
            <div class="blog-card ">
              <div>
                <img src={BlogImage1} alt="" />
              </div>
              <div>
                <a href="">
                  <h4>
                    How does science and technology affect contemporary life?
                  </h4>
                </a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt perferendis labore explicab...</p>
              </div>
              <button class="btn btn-primary"> Read More</button>
            </div>
            <div class="blog-card">
              <div>
                <img src={BlogImage2} alt="" />
              </div>
              <div>
                <a href="">
                  <h4>
                    What is the contribution of technology in reducing crime
                    rates?
                  </h4>
                </a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt perferendis labore explicab...</p>
              </div>
              <button class="btn btn-primary"> Read More</button>
            </div>

            <div class="blog-card">
              <div>
                <img src={BlogImage3} alt="" />
              </div>
              <div>
                <a href="">
                  <h4>
                    What things used to be science fiction, but are now science
                    fact?
                  </h4>
                </a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt perferendis labore explicab...</p>
              </div>
              <button class="btn btn-primary"> Read More</button>
            </div>

            <div class="blog-card">
              <div>
                <img src={BlogImage4} alt="" />
              </div>
              <div>
                <a href="">
                  <h4>What is an Apple mask, and how much does it cost?</h4>
                </a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt perferendis labore explicab...</p>
              </div>
              <button class="btn btn-primary"> Read More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Blogs;
