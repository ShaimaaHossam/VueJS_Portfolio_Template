<template>
  <div class="projects ms-lg-5">
    <div
      data-aos="zoom-in-down"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
      id="projects"
      class="section_header text-start d-flex"
    >
      <div class="section_header">
        <p class="header">My latest projects</p>
        <div class="hline"></div>
      </div>
      <div class="icon_big ms-3">
        <a href="https://github.com/ShaimaaHossam" target="_blank"
          ><fa :icon="['fab', 'github']"
        /></a>
      </div>
    </div>

    <div
      v-for="(project, index) in projects"
      :key="project.id"
      class="container mb-5"
    >
      <div class="row">
        <div
          :data-aos="index % 2 == 0 ? 'fade-left' : 'fade-right'"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          class="p-0 img-container col-lg-6"
          :class="index % 2 == 0 ? 'order-lg-2' : ''"
        >
          <img
            class="w-100 h-100"
            :src="require('../assets/' + project.image)"
            alt=""
          />
        </div>
        <div
          :data-aos="index % 2 == 0 ? 'fade-right' : 'fade-left'"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          class="mt-4 text-center text col-lg-6 my-lg-auto"
          :class="index % 2 == 0 ? 'text-lg-start' : 'text-lg-start'"
        >
          <div class="d-flex justify-content-center justify-content-lg-end">
            <p class="project_title me-2">{{ project.title }}</p>
            <div class="icons align-self-center">
              <a target="_blank" :href="project.href"
                ><fa class="icon" :icon="project.icon"
              /></a>
            </div>
          </div>

          <p class="project_subtitle">{{ project.subtitle }}</p>

          <div class="desc text-start">
            <p
              v-for="(desc, i) in project.description"
              :key="i"
              v-html="desc"
            ></p>
          </div>
          <ul class="tools d-flex devspan justify-content-evenly ">
            <li v-for="(tool, index) in project.tools" :key="index + 'v'">
              {{ tool }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import projects from "../data/projects.json";
export default {
  data() {
    return {
      projects,
    };
  },
};
</script>
<style scoped>
.projects {
  margin-top: 15%;
  padding: 13%;
}

.section_header {
  color: rgb(215, 238, 247);
  margin-bottom: 70px;
}
.hline {
  border-bottom: 1px solid white;
  width: 120px;
}
.icon {
  color: rgb(32, 157, 206);
  font-size: 1.3rem;
  margin-right: 5px;
}
.img-container {
  background-color: rgb(26, 36, 56);
  border: 1px solid transparent;
  border-radius: 10px;
}
.img-container img {
  opacity: 0.25;
  transition: 0.5s;
  border: 1px solid transparent;
  transition: 0.3s;
  border-radius: 10px;
}
.img-container:hover img {
  opacity: 1;
  cursor: pointer;
  padding: 0;
}
.project_title {
  font-size: 1.6rem;
  font-weight: bold;
  color: rgb(153, 174, 199);
  margin: 0;
}
.icon_big {
  font-size: 35px;
}
.icon:hover {
  cursor: pointer;
}
.tools {
  color: rgb(153, 174, 199);
}
.tools li {
  margin-right: 10px;
  color: rgb(32, 157, 206);
  font-size: 0.8rem;
}
.desc {
  background-color: rgb(9, 29, 59);
  color: rgb(153, 174, 199);
  border: 1px solid transparent;
  box-shadow: 2px 2px 40px rgb(4, 20, 36);
  margin-top: 20px;
  border-radius: 7px;
  padding: 20px 20px;
}
.project_subtitle {
  font-size: 1.2rem;
  color: rgb(32, 157, 206);
  font-weight: bold;
  margin: 0;
}
</style>
