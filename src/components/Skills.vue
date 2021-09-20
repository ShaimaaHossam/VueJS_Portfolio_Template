<template>
  <div id="skills" class="skills ms-lg-5">
    <div
      data-aos="zoom-in-down"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
      class="mx-auto head ms-5"
    >
      <p class="header text-start">My Skills</p>
      <div class="hline"></div>
    </div>

    <div class="container ms-lg-5">
      <div class="row">
        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          class="col-lg-3"
        >
          <ul class="overflow-auto category d-flex ps-0 d-lg-block">
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
        <div
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          class="mx-auto my-auto skill_container col-lg-6"
        >
          <div
              v-for="(category, index) in skills[menu].categories"
              :key="index"
            >
              <div class="mt-2 d-flex">
                <fa icon="caret-right" class="mt-1 devspan me-1" />
                <p class="text-start fw-bold skill">{{ category.title }}</p>
              </div>
              <div class="flex-wrap d-flex justify-content-between">
                <p v-for="(skill, i) in category.skills" :key="i+'x'" class="devspan item">{{skill}}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.head {
  margin-bottom: 70px;
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
    padding: 0;
    margin: 15% 0 0 0;
  }
  .skill_container {
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
import skills from "../data/skills.json";
export default {
  data() {
    return {
      menu: 0,
      skills,
    };
  },
  methods: {
    setMenu(value) {
      this.menu = value;
    },
  },
};
</script>
