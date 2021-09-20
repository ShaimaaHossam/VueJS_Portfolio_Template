<template>
  <div
    data-aos="zoom-in-down"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center"
    id="about"
    class="mx-0 ms-lg-5 hero about"
  >
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
                <p class="devspan fw-bold">Shaimaa Hossam</p>
                <p v-for="(par, index) in info.about" :key="index">{{ par }}</p>

                <p class="text-white fw-bold">Interests</p>
                <div
                  v-for="(interest, i) in info.interests"
                  :key="i + 'c'"
                  class=" d-flex"
                >
                  <fa class="mb-0 icon me-2" :icon="['far', 'star']" />
                  <p>{{ interest }}</p>
                </div>
              </div>
            </div>
            <div class="mx-auto mt-5 mt-lg-0 col-lg-5 col-sm-6 img_container">
              <img class="w-100 h-100" src="../assets/1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import info from '../data/about.json'
export default {
  data() {
    return {
      info
    };
  },
};
</script>
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
  font-size: 18px;
}
div img {
  object-fit: cover;
  opacity: 0.7;
  border: 1px solid transparent;
  border-radius: 20px;
}
div img:hover {
  opacity: 1;
  transition: 0.3s;
}
.img_container {
  background: rgb(13, 8, 29);
  padding: 0;
  border: 1px solid transparent;
  border-radius: 20px;
}
</style>
