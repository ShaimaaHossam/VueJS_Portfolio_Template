<template>
  <div id="about" class="mx-4 hero mx-md-0 about">
    <div
      class="d-flex justify-content-between align-content-center flex-column"
    >
      <div class="mx-auto my-auto text-start">
        <div class="position-relative section_header ">
          <p class="header d-block">About me</p>
          <div class="hline"></div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="about_par">
                <p>
                  Hello. My name is <span class="devspan">Shaimaa Hossam</span>. I'm a Computer Engineering
                  student at Arab Academy for Science and Technology.
                </p>
                <p>
                  I'm passionate about designing, coding, and building creative
                  software projects.
                </p><br>
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
            <div class="col-sm-4 offset-sm-2">
                <div class="about_box">
                    <div class="box-overlay">
                        <a href="https://linkedin.com/in/shaimaa-hossam-367362164/" class="pop">
                            <img src="../assets/1.png" alt="">
                            <div class="sonar_wrapper">
                                <span class="sonar_emitter">
                                    <div class="sonar_wave"></div>
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.about {
  margin-top: 15%;
  padding: 13%;
}
.section_header {
  color: rgb(215, 238, 247);
  margin-bottom: 70px;
}
.hline {
  border-bottom: 1px solid white;
  width: 50px;
}

.devspan, .icon {
  color: rgb(32, 157, 206);
}
.about_par {
  color: rgb(153, 174, 199);
}
.about_box{
    box-shadow: 0 0 0 10px #000000 inset;
    margin-right: 0;
    margin-top: 0;
    position: relative;
    display: block;
}
.box-overlay{
    position:absolute;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    background-color:rgb(32, 157, 206);
    opacity: 1;
    z-index: 3;
    transform: translateY(30px) translateX(-30px);
}
.pop img{
    transform: translateY(30px) translateX(-30px);
    width: 100%;
    z-index: 1;
    border: 1px solid transparent;
    border-radius: 20px;
}

</style>
