<template>
  <div id="app">
    <LeftSide />
    <RightSide />
      <Navbar />
      <transition name="fade">
        <Dropdown class="d-md-none" v-if="isMenu"/>
      </transition>
      
      <Hero />
      <About />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import LeftSide from "./components/LeftSide.vue";
import RightSide from "./components/RightSide.vue";
import About from "./components/aboutme.vue";
import Dropdown from "./components/Dropdown.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Dropdown,
    Hero,
    About,
    LeftSide,
    RightSide
  },
  computed: {
    isMenu(){
      return this.$store.state.toggleMenu;
    }
  }, 
  methods: {
      
  }
  }
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;1,300&display=swap");
#app {
  font-family: "Rubik", sans-serif;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(188, 132, 241);
  background: linear-gradient(
    90deg,
    rgba(188, 132, 241, 1) 0%,
    rgba(3, 26, 42, 1) 0%,
    rgba(8, 16, 60, 1) 100%
  );
  text-align: center;
  overflow:hidden;
  color: #2c3e50;
  scrollbar-width: 50px;
  height: 100%;;
}
.blur{
  opacity: 0.1;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.header{
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2rem;
    font-weight: bold;
    color:white;
    z-index:6;
}
.header2{
    color: rgb(196, 199, 207);
    font-size: 1.8rem;
    font-weight: bold;
    z-index: 1;
}
.subheader{
     font-size: 1.2rem;
     color:white;
     z-index: 16;
}
</style>
