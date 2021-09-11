<template>
  <div data-aos="zoom-in-down"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" class="projects">
    <div id="projects" class="section_header text-start d-flex">
      <div class="section_header">
        <p class="header">My latest projects</p>
        <div class="hline"></div>
      </div>
      <div class="icon_big ms-3">
        <a href="https://github.com/ShaimaaHossam" target="_blank"><fa :icon="['fab', 'github']" /></a>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="img-container p-0 col-lg-6">
          <img class="w-100 h-100" src="../assets/Hagarts.png" alt="" />
        </div>
        <div class="text col-lg-6 text-center text-lg-end mt-4 my-lg-auto">
          <div class="d-flex justify-content-center justify-content-lg-end">
            <p class="project_title me-2">Hagarts</p>
            <div class="icons align-self-center">
              <a target="_blank" href="https://hagarts.netlify.app"
                ><fa class="icon" icon="external-link-alt"
              /></a>
            </div>
          </div>

          <p class="project_subtitle">Web Project</p>

          <p class="desc text-start">
            A portfolio website built for an artist to display and sell her work
            to her clients professionaly. <br />The admin is provided a fully
            functional admin panel to organize the content of the website.
          </p>
          <ul class="tools d-flex devspan justify-content-evenly ">
            <li>Vue</li>
            <li>Gridsome</li>
            <li>CMS</li>
            <li>Netlify</li>
            <li>GraphQL</li>
            <li>Tailwind</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container mt-5 mt-lg-0 mx-auto">
      <div class="row">
        <div class="img-container p-0 col-lg-6 order-lg-2">
          <img class="w-100 h-100" src="../assets/Edufy.png" alt="" />
        </div>
        <div class="text col-lg-6 text-center text-lg-start mt-4 my-lg-auto">
          <div class="d-flex justify-content-center justify-content-lg-start">
            <p class="project_title me-2">Edufy</p>
            <div class="icons align-self-center mt-1">
              <a target="_blank" href="https://www.github.com/khaledtag98/edufy"
                ><fa class="icon" :icon="['fab', 'github']"
              /></a>
            </div>
          </div>
          <p class="project_subtitle">Web Project</p>
          <p class="desc text-start">
            An online learning platform where course creators can organize their
            content. (A <span class="devspan">Udemy</span> clone with a few touches)
          </p>
          <ul class="tools d-flex devspan justify-content-evenly ">
            <li>Vue</li>
            <li>Laravel</li>
            <li>Inertia</li>
            <li>Tailwind</li>
            <li>SQL</li>
          </ul>
        </div>
        
      </div>
    </div>

    <div class="container mt-5 mt-lg-0">
      <div class="row">
        <div class="img-container p-0 col-lg-6">
          <img class="w-100 h-100" src="../assets/Inspect.png" alt="" />
        </div>
        <div class="text col-lg-6 text-center text-lg-end mt-4 my-lg-auto">
          <div class="d-flex justify-content-center justify-content-lg-end">
            <p class="project_title me-2">Inspect</p>
            <div class="icons align-self-center">
              <a target="_blank" href="https://github.com/khaledtag98/Inspect/"
                ><fa class="icon" :icon="['fab', 'github']"
              /></a>
            </div>
          </div>

          <p class="project_subtitle">Web Project</p>

          <p class="desc text-start">
             This website is a user-friendly platform where the companies can display their residential or commercial properties.
          </p>
          <ul class="tools d-flex devspan justify-content-evenly ">
            <li>Laravel</li>
            <li>SQL</li>
            <li>Tailwind</li>
            <li>Javascript</li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
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
.icon_big{
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
