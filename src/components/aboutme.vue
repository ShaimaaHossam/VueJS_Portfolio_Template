<template>
  <div data-aos="zoom-in-down"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" id="about" class="mx-0 hero about">
    <div
      class="d-flex justify-content-between align-content-center flex-column"
    >
      <div class="mx-auto my-auto text-start">
        <div class="mx-auto position-relative section_header ">
          <p class="header d-block">About me</p>
          <div class="hline"></div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="about_par">
                <p>
                  Welcome to my website!<br />
                  I'm a Computer Engineering
                  <span class="devspan">undergraduate</span> at Arab Academy for
                  Science and Technology.
                </p>
                <p>
                  I'm passionate about designing, coding, and building creative
                  software projects.
                </p>
                <br />
                <p class="text-white fw-bold">Career interests</p>
                <div class=" d-flex">
                  <fa class="icon me-2" :icon="['far', 'star']" />
                  <p>Full-stack software development</p>
                </div>
                <div class="d-flex">
                  <fa class="icon me-2" :icon="['far', 'star']" />
                  <p>Deep Learning</p>
                </div>
                <div class="d-flex">
                  <fa class="icon me-2" :icon="['far', 'star']" />
                  <p>Research</p>
                </div>
              </div>
            </div>
            <div class="mx-auto mt-5 mt-lg-0 col-lg-4 col-sm-6 img_container">
              <img class="w-100 h-100" src="../assets/1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.about {
  padding: 13%;
  margin-top: 15%;
}
.section_header {
  color: rgb(215, 238, 247);
  margin-bottom: 70px;
}
.hline {
  border-bottom: 1px solid white;
  width: 50px;
}

.devspan,
.icon {
  color: rgb(32, 157, 206);
}
.about_par {
  color: rgb(153, 174, 199);
  font-size: 1.13rem;
}

div img{
  object-fit: cover;
  opacity: 0.7;
  border:1px solid transparent;
  border-radius: 20px;
}
.img_container{
  background: rgb(188, 132, 241);
  background: linear-gradient(
    90deg,
    rgba(188, 132, 241, 1) 0%,
    rgba(3, 26, 42, 1) 0%,
    rgba(8, 16, 60, 1) 100%
  );
  border:1px solid transparent;
  border-radius: 20px;
}
</style>
