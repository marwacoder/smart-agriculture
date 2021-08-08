<template>
  <div class="welcome">
    <div class="welcome-container">
      <!-- <div>
        <ForgotPassword :showForm="showForm" />
      </div>-->
      <div v-show="!form.value">
        <SignIn :showForm="showForm" />
      </div>
    </div>
    <v-footer absolute class="font-weight-medium" color="light-green">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Software Business Solutions</strong>
      </v-col>
    </v-footer>
  </div>
</template>
<script>
import SignIn from "./SignIn";
//import ForgotPassword from "./forgotPassword";
import { formToggle } from "../../comp-function/toogle";

export default {
  components: {
    SignIn
    //ForgotPassword
  },

  setup() {
    let { showForm, form } = formToggle();
    console.log(form.value, showForm, "hhh");
    return { showForm, form };
  }
};
</script>
<style scoped>
.welcome-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
}
</style>