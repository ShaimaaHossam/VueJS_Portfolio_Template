<template>
  <div id="skills" class="skills ms-lg-5">
    <div data-aos="zoom-in-down"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center" class="head mx-auto ms-5">
      <p class="header text-start">My Skills</p>
      <div class="hline"></div>
    </div>

    <div class="container ms-lg-5">
      <div class="row">
        <div data-aos="fade-right"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center" class="col-lg-3">
          <ul class="category d-flex ps-0 d-lg-block overflow-auto">
            <li :class="menu == 0 ? 'selected' : 'not'" @click="setMenu(0)">
              Front End Development
            </li>
            <li :class="menu == 1 ? 'selected' : 'not'" @click="setMenu(1)">
              Back End Development
            </li>
            <li :class="menu == 2 ? 'selected' : 'not'" @click="setMenu(2)">
              Programming Languages
            </li>
            <li :class="menu == 3 ? 'selected' : 'not'" @click="setMenu(3)">
              Others
            </li>
          </ul>
        </div>
        <div data-aos="fade-left"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center" class="skill_container my-auto mx-auto col-lg-6">
          <div v-if="menu === 0">
            <div class="d-flex mt-2">
              <fa icon="caret-right" class="devspan mt-1 me-1" />
              <p class="text-start fw-bold skill">Programming Languages</p>
            </div>
            <div class="d-flex justify-content-between flex-wrap">
              <p class="devspan item">Javascript</p>
              <p class="devspan item">Typescript</p>
              <p class="devspan item">HTML</p>
              <p class="devspan item">CSS</p>
            </div>
            <div class="d-flex mt-2">
              <fa icon="caret-right" class="devspan mt-1 me-1" />
              <p class="text-start fw-bold skill">Frameworks & Libraries</p>
            </div>
            <div class="d-flex justify-content-between flex-wrap">
              <p class="devspan item">Vue</p>
              <p class="devspan item">Vuex</p>
              <p class="devspan item">React</p>
              <p class="devspan item">Redux</p>
              <p class="devspan item">Bootstrap</p>
              <p class="devspan item">Tailwind</p>
            </div>
          </div>
          <div v-if="menu === 1">
            <div class="d-flex mt-2">
              <fa icon="caret-right" class="devspan mt-1 me-1" />
              <p class="text-start fw-bold skill">Programming Languages</p>
            </div>
            <div class="d-flex justify-content-between flex-wrap">
              <p class="devspan item">PHP</p>
              <p class="devspan item">Python</p>
              <p class="devspan item">Ruby</p>
            </div>
            <div class="d-flex mt-2">
              <fa icon="caret-right" class="devspan mt-1 me-1" />
              <p class="text-start fw-bold skill">Database Management</p>
            </div>
            <div class="d-flex justify-content-between flex-wrap">
              <p class="devspan item">SQL</p>
              <p class="devspan item">MongoDB</p>
            </div>
            <div class="d-flex mt-2">
              <fa icon="caret-right" class="devspan mt-1 me-1" />
              <p class="text-start fw-bold skill">Frameworks & Libraries</p>
            </div>
            <div class="d-flex justify-content-between flex-wrap">
              <p class="devspan item">Laravel</p>
              <p class="devspan item">Nodejs</p>
            </div>
          </div>
          <div v-if="menu === 2">
            <div
              class="d-flex justify-content-between flex-wrap align-content-center"
            >
              <p class="devspan item">C</p>
              <p class="devspan item">C++</p>
              <p class="devspan item">C#</p>
              <p class="devspan item">Java</p>
              <p class="devspan item">OOP</p>
              <p class="devspan item">Data Structures</p>
              <p class="devspan item">Javascript</p>
              <p class="devspan item">Python</p>
              <p class="devspan item">Ruby</p>
            </div>
          </div>
          <div v-if="menu === 3">
            <div class="d-flex mt-2">
              <fa icon="caret-right" class="devspan mt-1 me-1" />
              <p class="text-start fw-bold skill">Tools & Platforms</p>
            </div>
            <div class="d-flex justify-content-between flex-wrap">
              <p class="devspan item">Git</p>
              <p class="devspan item">Netlify</p>
              <p class="devspan item">Heroku</p>
            </div>
            <div class="d-flex mt-2">
              <fa icon="caret-right" class="devspan mt-1 me-1" />
              <p class="text-start fw-bold skill">Design</p>
            </div>
            <div class="d-flex justify-content-between flex-wrap">
              <p class="devspan item">Adobe XD</p>
              <p class="devspan item">Figma</p>
              <p class="devspan item">Photoshop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.head{
    margin-bottom:70px;
}
.skills {
  margin-top: 15%;
  padding: 13%;
}
.circle {
  font-size: 6px;
}
.hline {
  border-bottom: 1px solid white;
  width: 50px;
}
.section_header {
  margin-bottom: 70px;
}
.category li {
  padding: 7% 5%;
  transition: 0.5s;
}
.category li:hover {
  background-color: rgb(17, 33, 54);
  color: rgb(32, 157, 206);
  cursor: pointer;
}
.selected {
  border-left: 2px solid rgb(32, 157, 206);
  background-color: rgb(17, 33, 54);
  color: rgb(32, 157, 206);
}
.not {
  border-left: 1px solid rgb(153, 174, 199);
  color: rgb(153, 174, 199);
  background-color: rgb(9, 29, 59);
}
.skill {
  color: rgb(153, 174, 199);
}
.item {
  width: 33.33%;
}
@media only screen and (max-width: 991px) {
  .skills {

    padding:0;
    margin: 15% 0 0 0;
  }
  .skill_container{
      padding: 13%;
  }
  .category {
    box-shadow: 2px 2px 40px rgb(4, 20, 36);
    margin-top: 70px;
    margin-bottom: 40px;
    width: 100%;
  }
  .category li {
    padding: 7% 4%;
    transition: 0.5s;
    font-size: 0.9rem;
  }
  .category li:hover {
    background-color: rgb(17, 33, 54);
    color: rgb(32, 157, 206);
    cursor: pointer;
  }
  .selected {
    border-bottom: 2px solid rgb(32, 157, 206);
    border-left: 0px;
    background-color: rgb(17, 33, 54);
    color: rgb(32, 157, 206);
  }
  .not {
    border-bottom: 1px solid rgb(153, 174, 199);
    border-left: 0px;
    color: rgb(153, 174, 199);
  }
}
</style>
<script>
export default {
  data() {
    return {
      menu: 0,
    };
  },
  methods: {
    setMenu(value) {
      this.menu = value;
    },
  },
};
</script>
