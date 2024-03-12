
import "./Categories.css"
function Categories() {
  return <>
    <hr />
    <section class="section category" aria-label="category">
      <div class="container">
        <p class="section-subtitle text-center">Categories</p>

        <h2 class="h2 section-title text-center">
          Online <span class="span">Classes</span> For Remote Learning.
        </h2>

        <ul class="grid-list flex">

          <li class="magic-shadow-sm-service">
            <div class="category-card cat-c1">

              <div class="card-icon">
                <img src="/src/assets/icons/category-1.svg" width="40" height="40" loading="lazy"
                  alt="Online Degree Programs" class="img" />
              </div>

              <h3 class="h3">
                <a href="#" class="card-title">Advanced Python Programs</a>
              </h3>

              <p class="card-text">
                Lorem ipsum dolor consec tur elit adicing sed umod tempor.
              </p>

              <button className="card-badge"> 02 Courses </button>

            </div>
          </li>

          <li class="magic-shadow-sm-service">
            <div class="category-card c2" >

              <div class="card-icon">
                <img src="/src/assets/icons/category-2.svg" width="40" height="40" loading="lazy"
                  alt="Non-Degree Programs" class="img" />
              </div>

              <h3 class="h3">
                <a href="#" class="card-title">Math's Calculus Programs</a>
              </h3>

              <p class="card-text">
                Lorem ipsum dolor consec tur elit adicing sed umod tempor.
              </p>

              <button className="card-badge"> 02 Courses </button>

            </div>
          </li>

          <li class="magic-shadow-sm-service">
            <div class="category-card c3" >

              <div class="card-icon">
                <img src="/src/assets/icons/category-3.svg" width="40" height="40" loading="lazy"
                  alt="Off-Campus Programs" class="img" />
              </div>

              <h3 class="h3">
                <a href="#" class="card-title">AI and ML Programs</a>
              </h3>

              <p class="card-text">
                Lorem ipsum dolor consec tur elit adicing sed umod tempor.
              </p>

              <button className="card-badge"> 02 Courses </button>

            </div>
          </li>

          <li class="magic-shadow-sm-service">
            <div class="category-card c4">

              <div class="card-icon">
                <img src="/src/assets/icons/category-4.svg" width="40" height="40" loading="lazy"
                  alt="Hybrid Distance Programs" class="img" />
              </div>

              <h3 class="h3">
                <a href="#" class="card-title">Popular Libraries Program</a>
              </h3>

              <p class="card-text">
                Lorem ipsum dolor consec tur elit adicing sed umod tempor.
              </p>

              <button className="card-badge"> 02 Courses </button>

            </div>
          </li>

        </ul>

      </div>
    </section>

  </>
}
export default Categories;
