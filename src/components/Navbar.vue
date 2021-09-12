<template>
  <VueScrollFixedNavbar>
    <div
     id="nav"
      class="navbar d-flex justify-content-between justify-content-lg-around"
      :class="{ 'navbar--hidden': !showNavbar }"
    >
      <fa
        v-click-outside="hide"
        @click="toggle"
        :class="isMenu ? 'position-fixed' : ''"
        class="bar ms-4 d-md-none"
        icon="bars"
      />
      <ul
        class="links d-none d-md-flex justify-content-around align-content-center"
      >
        <a class="me-4" href="#about"><li>About me</li></a>
        <a class="me-4" href="#projects"><li>Projects</li></a>
        <a class="me-4" href="#skills"><li>Skills</li></a>
        <a class="me-4" href="#contact"><li>Contact</li></a>
      </ul>
      <a :class="isMenu ? 'd-none' : 'd-block'" class="btn-contact me-4 ">Resume</a>
    </div>
  </VueScrollFixedNavbar>
</template>
<script>
import ClickOutside from "vue-click-outside";
import { VueScrollFixedNavbar } from "vue-scroll-fixed-navbar";
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },

  components: {
    VueScrollFixedNavbar,
  },
  computed: {
    isMenu() {
      return this.$store.state.toggleMenu;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    toggle() {
      this.$store.commit("toggle");
    },
    hide() {
      this.$store.commit("hide");
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      } 
      if (currentScrollPosition == 0) {
        document.getElementById("nav").classList.remove("navbar--shadow");
      }
      if (currentScrollPosition != 0) {
        document.getElementById("nav").classList.add("navbar--shadow");
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      if(this.showNavbar){
          document.getElementById("nav").classList.add("navbar--shadow");
      }
      else{
          document.getElementById("nav").classList.remove("navbar--shadow");
      }
      this.lastScrollPosition = currentScrollPosition;
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>
<style>
ul {
  list-style: none;
}
.navbar{
  z-index:100;
}
.bar {
  color: rgb(32, 157, 206);
  font-size: 24px;
}
.bar:hover {
  cursor: pointer;
}
.btn-contact {
  color: white;
  text-decoration: none;
  border-radius: 10px;
  background: rgb(32, 157, 206);
  padding: 7px 20px;
  transition: 0.5s;
}
.btn-contact:hover {
  color: white;
  cursor: pointer;
}
ul a {
  font-size: 18px;
  text-decoration: none;
  color: rgb(172, 208, 230);
}
ul a:hover {
  color: rgb(32, 157, 206);
}
.logo {
  font-weight: bold;
  font-size: 23px;
  color: white;
}
.links {
  margin-top: 10px;
}
.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
.navbar--shadow {
  background: rgb(188, 132, 241);
  background: linear-gradient(
    90deg,
    rgba(188, 132, 241, 1) 0%,
    rgba(3, 26, 42, 1) 0%,
    rgba(8, 16, 60, 1) 100%
  );
  box-shadow: 2px 2px 40px rgb(4, 20, 36);
}
</style>
