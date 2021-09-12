<template>
  <div id="contact" class="form_container ms-lg-5">
    <div class="title">
      <h2
        data-aos="zoom-in-down"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        class="header"
      >
        Now is the time to get in touch
      </h2>
      <p
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        class="subheader2"
      >
        Do not hesitate to reach out, I would love to hear from you!
      </p>
    </div>

    <div
      data-aos="zoom-in-down"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
      class="row"
    >
      <div class="col-md-8 mx-auto mb-md-0 mb-5">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form
            id="contact-form"
            class="contact-form"
            @submit.prevent="handleSubmit(sendEmail)"
          >
            <div class="row">
              <div class="col-md-6">
                <div class="md-form mb-4">
                  <ValidationProvider
                    name="name"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <input
                      placeholder="Enter your name"
                      name="name"
                      v-model="name"
                      type="text"
                      class="form-control"
                    />
                    <span class="alert text-start">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <div class="col-md-6">
                <div class="md-form mb-4">
                  <ValidationProvider
                    name="email"
                    rules="required|email"
                    v-slot="{ errors }"
                  >
                    <input
                      placeholder="Enter your email"
                      v-model="email"
                      name="email"
                      type="email"
                      class="form-control"
                    />
                    <span class="alert text-start">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-4">
                  <ValidationProvider
                    name="message"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <textarea
                      type="text"
                      v-model="message"
                      name="message"
                      rows="5"
                      class="form-control md-textarea"
                      placeholder="Enter your message here"
                    ></textarea>
                    <span class="alert text-start">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
            </div>
              <input type="submit" value="Send" class="connect-btn" />
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>
<style scoped>
.form_container {
  margin-top: 15%;
  padding: 13%;
}
.rec{
    z-index: 15;
}
.alert {
  color: rgb(243, 56, 56);
}
.subheader2 {
  font-size: 1.2rem;
  color: rgb(32, 157, 206);
  z-index: 16;
}
.title {
  margin-bottom: 70px;
}
.connect-btn {
  background: rgb(32, 157, 206);
  color: hsl(0, 0%, 100%);
  font-size: 1rem;
  text-decoration: none;
  font-weight: bold;
  padding: 13px 20px;
  border: 1px solid transparent;
  border-radius: 10px;
  transition: 0.3s;
}
</style>
<script>
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

init("user_qaP0oCjg4sd1ZFp1mw3bT");
export default {
  methods: {
    sendEmail() {
      emailjs.sendForm("gmail", "template", "#contact-form").then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
          alert("Message delivered successfully!");
        },
        (error) => {
          console.log("Error", error);
          alert("Error delivering your message.");
        }
      );
    },
  },
  data: () => ({
    name: "",
    email: "",
    message: "",
  }),
};
</script>
