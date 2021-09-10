<template>
    <div class="navbar d-flex justify-content-between justify-content-lg-around">
         <fa v-click-outside="hide" @click="toggle" :class="isMenu ? 'position-fixed' : ''" class="bar ms-4 d-md-none" icon="bars"/>
        <ul class="links d-none d-md-flex justify-content-around align-content-center">
            <a class="me-4" href="#about"><li>About me</li></a>
            <a class="me-4" href=""><li>Projects</li></a>
            <a href=""><li>Skills</li></a>
        </ul>
        <a class="btn-contact me-4 ">Resume</a>
    </div>
</template>
<script>
import ClickOutside from 'vue-click-outside'
export default{
    
    computed: {
    isMenu(){
      return this.$store.state.toggleMenu;
    }
  }, 
  mounted () {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el
  },
  methods: {
      toggle(){
          this.$store.commit('toggle');
      },
      hide(){
          this.$store.commit('hide');
      }
  },
   directives: {
    ClickOutside
  }
}
</script>
<style>
ul{
    list-style: none;
}
.bar{
    color:rgb(32, 157, 206);
    font-size: 24px;
    z-index: 11;
}
.bar:hover{
    cursor: pointer;
}
.btn-contact{
    color: white;
    text-decoration: none;
    border-radius: 10px;
    background: rgb(32, 157, 206);
    padding: 7px 20px;
    transition: 0.5s;
}
.btn-contact:hover{
    color:white;
    cursor: pointer;
}
ul a{
    font-size: 18px;
    text-decoration: none;
    color: rgb(172, 208, 230);
}
ul a:hover{
    color: rgb(32, 157, 206);
}
.logo{
    font-weight: bold;
    font-size: 23px;
    color: white;
}
.links{
    margin-top: 10px;
}
</style>