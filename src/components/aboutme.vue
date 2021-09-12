<template>
  <div data-aos="zoom-in-down"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center" id="about" class="mx-0 ms-lg-5 hero about">
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
                  <span class="devspan">Shaimaa Hossam</span><br>
                  A computer engineering undergraduate at Arab Academy for
                  Science and Technology with fundamental knowledge of software design and development.
                </p>
                <br />
                <p class="text-white fw-bold">Interests</p>
                <div class=" d-flex">
                  <fa class="icon me-2 mb-0" :icon="['far', 'star']" />
                  <p>Full-stack software development</p>
                </div>
                <div class="d-flex mt-0 mb-0">
                  <fa class="icon me-2" :icon="['far', 'star']" />
                  <p>Artificial Intelligence</p>
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


.about_par {
  color: rgb(153, 174, 199);
  font-size: 1.13rem;
}
.icon {
  color: rgb(32, 157, 206);
  font-size:18px;
}
div img{
  object-fit: cover;
  opacity: 0.7;
  border:1px solid transparent;
  border-radius: 20px;
}
div img:hover{
  opacity:1;
  transition: 0.3s;
}
.img_container{
  background: rgb(13, 8, 29);
  padding:0;
  border:1px solid transparent;
  border-radius: 20px;
}
</style>
