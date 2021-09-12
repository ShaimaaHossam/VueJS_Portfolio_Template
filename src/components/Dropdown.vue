<template>
    <div class="top-0 w-100 dropdown position-absolute position-fixed">
      <ul class="list">
        <a href="#about"><li>About me</li></a>
        <a href="#projects"><li>Projects</li></a>
        <a href="#skills"><li>Skills</li></a>
        <a href=""><li>Contact</li></a>
      </ul>
    </div>
</template>
<script>
export default {
  computed: {
    isMenu() {
      return this.$store.state.toggleMenu;
    },
  },
  methods: {},
};
</script>
<style scoped>
.dropdown {
  background-color: rgb(25, 81, 128);
  z-index: 10;
  width: 250px;
  border: 1px solid transparent;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  transition: 0.3s;
  height: 450px;
  padding-top: 30%;
  box-shadow:  2px 2px 40px rgb(4, 20, 36);
}
.list {
  margin: 0;
  padding: 0;
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
a li {
  margin-bottom: 30px;
  font-size: 1.5rem;
}

</style>
