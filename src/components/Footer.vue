<template>
  <div class="footer ms-lg-5">
    
    <p class="email p-0 m-0">Made by <span class="devspan">Shaimaa Hossam</span></p>
    <p class="m-0 p-0 space email">shaimaahossam96@gmail.com</p>
    <div class="d-flex d-lg-none justify-content-center mt-3 p-0">
      <a target="_blank" href="mailto:shaimaahossam96@gmail.com"
        ><fa class="mb-4 icons d-block" icon="at"
      /></a>
      <a
        target="_blank"
        href="https://linkedin.com/in/shaimaa-hossam-367362164/"
        ><fa class="mb-4 icons d-block" :icon="['fab', 'linkedin']"
      /></a>
      <a target="_blank" href="https://www.github.com/ShaimaaHossam"
        ><fa class="mb-4 icons d-block" :icon="['fab', 'github']"
      /></a>
      <a target="_blank" href="https://www.facebook.com/shaimaa.hossam98"
        ><fa class="mb-4 icons d-block" :icon="['fab', 'facebook-square']"
      /></a>
      <a target="_blank" href="https://www.instagram.com/shaimaahossam98/"
        ><fa class="mb-4 icons d-block" :icon="['fab', 'instagram']"
      /></a>
    </div>
  </div>
</template>
<style scoped>
.footer{
    margin-top:15%;
    margin-bottom: 70px;
}
.icons {
  color: rgb(151, 154, 155);
  font-size: 24px;
  z-index:100;
  margin-right: 15px;
}
.email{
   color: rgb(153, 174, 199);
}
.space{
    letter-spacing: 5px;
}
</style>
