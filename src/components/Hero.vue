<template>
    <div data-aos="zoom-in-down"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" class="mx-4 hero mx-md-0" >
        <div class="d-flex justify-content-center align-content-center flex-column">
            <div class="mx-auto my-auto text-start text">
            <p class="p-0 m-0 text-white display-6 fw-bold">Hi, my name is</p>
            <p class="p-0 m-0 display-3 fw-bold devspan">Shaimaa Hossam</p>
            <p class="p-0 m-0 display-6 header2">I'm a Software Engineer at your service</p>
            <div class="mt-5 connect">
                <a class="connect-btn" href="">Browse my projects</a>
            </div>
            
        </div>
        </div>
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
.hero{
    padding:5%;
    margin-top: 120px;
    position: relative;
    overflow: hidden;
}
.devspan{
    color:rgb(32, 157, 206);
}
.blur{
    opacity: 0.2;
}
.connect-btn{
    background: rgb(32, 157, 206);
    color: hsl(0, 0%, 100%);
    font-size: 1rem;
    text-decoration: none;
    font-weight: bold;
    padding: 13px 30px;
    border: 1px solid transparent;
    border-radius: 10px;
    transition: 0.3s;
}

.connect-btn:hover{
    padding: 13px 40px;
}

</style>