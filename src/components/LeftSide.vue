<template>
  <div data-aos="fade-left">
      <div
      class="bottom-0 d-none d-lg-block ms-5 position-fixed socials position-absolute start-0"
    >
        <a target="_blank" href="mailto:shaimaahossam96@gmail.com"><fa class="mb-4 icons d-block" icon="at" /></a>
        <a target="_blank" href="https://linkedin.com/in/shaimaa-hossam-367362164/"><fa class="mb-4 icons d-block" :icon="['fab', 'linkedin']" /></a>
        <a target="_blank" href="https://www.github.com/ShaimaaHossam"><fa class="mb-4 icons d-block" :icon="['fab', 'github']" /></a>
        <a target="_blank" href="https://www.facebook.com/shaimaa.hossam98"><fa class="mb-4 icons d-block" :icon="['fab', 'facebook-square']" /></a>
        <a target="_blank" href="https://www.instagram.com/shaimaahossam98/"><fa class="mb-4 icons d-block" :icon="['fab', 'instagram']" /></a> 
        
        <div class="vline ms-2 d-block"></div>
    </div>
    
  </div>
  
</template>
<style scoped>
.socials{
  z-index:100;
  padding:0 20px;

}
.vline{
  height: 100px;
  border-left: 2px solid rgb(194, 192, 192);
}
.icons {
  color: rgb(151, 154, 155);
  font-size: 24px;
  z-index:100;
}
.icons:hover{
  cursor: pointer;
}

</style>
