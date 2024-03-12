import CourseIcon from "/src/assets/icons/education.png";
import StudentsIcon from "/src/assets/icons/multiple-users-silhouette.png";
import TeachersIcon from "/src/assets/icons/classroom.png";
import SatisfactionIcon from "/src/assets/icons/satisfaction.png";
import "./Infography.css"

function Infography() {
  let info_table = ["10+", "100+", "100%"];
  return (
    <>
      <section class="infography">
        <div class="container">
          <div class="row">
            <div class="card-wrapper flex ">
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body c1">
                  <img src={CourseIcon} class="card-img-top" alt="..." />
                  <h2 class="card-title">{info_table[0]} Courses</h2>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body c2">
                  <img src={StudentsIcon} class="card-img-top" alt="..." />
                  <h2 class="card-title">{info_table[1]} Students</h2>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body c3">
                  <img src={TeachersIcon} class="card-img-top" alt="..." />
                  <h2 class="card-title">{info_table[0]} Teachers</h2>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body c4">
                  <img src={SatisfactionIcon} class="card-img-top" alt="..." />
                  <h3 class="card-title">{info_table[2]} Satisfaction</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Infography;
