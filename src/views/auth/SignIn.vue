<template>
  <div>
    <v-card  class="auth-container">
      <v-container >
        <v-layout wrap justify-space-around>
          <v-flex xs12 md6 pb-3>
             <!-- <v-layout wrap>
                 <v-flex xs12 md6>
                
                 </v-flex>
                 
             </v-layout> -->
            
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem tempore quibusdam qui optio? Veritatis sint culpa omnis molestias, animi itaque perspiciatis reprehenderit, alias quos recusandae aperiam velit a explicabo fuga?
              <!-- <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
                <v-carousel-item v-for="(slide, i) in state.slides" :key="i">
                  <v-sheet width="100%">
                    <v-img :src="slide.image" />
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>-->
            </div>
            <!-- <div class="mt-3">Sign In with</div>
            <div>
                <v-icon size="40" class="dark blue--text">mdi-google</v-icon>
                <v-icon size="40" class="blue--text">mdi-facebook</v-icon>
                <v-icon size="40" class="blue--text">mdi-twitter</v-icon>
            </div> -->
          </v-flex>
         
          <v-flex xs12 md6>
               
            <div>
                
              <v-form @submit.prevent="onSubmitHandler">
                <div>
                  <v-text-field
                    dense
                    color="green"
                    label="Email Address"
                    v-model="email"
                    outlined
                    single-line
                  />
                  <v-text-field
                    dense
                    type="password"
                    color="green"
                    label="Password"
                    v-model="password"
                    outlined
                    single-line
                  />
                </div>

                <div small block class="forgot green--text"  text>Forgot password?</div>
                <v-btn block type="submit" medium color="success" dark>Sign In</v-btn>
              </v-form>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
//import { reactive } from "@vue/composition-api";
export default {
  props: {
    showForm: {
      type: Function,
      required: true
    }
  },
  data: ()=> ({
    email: "",
      password: "",
      slides: [
        { image: require("../../assets/images1.jpg") },
        { image: require("../../assets/images2.jpg") },
        { image: require("../../assets/images3.jpg") },
        { image: require("../../assets/images4.jpg") }
      ]
  }),
  methods: {
    onSubmitHandler() {
      const data = {
        'email': this.email,
        'password': this.password
      }
      this.$store.dispatch('auth', data)
      console.log(this.email, this.password, "value");
    }
  }
};
</script>

<style scoped>
.auth-container {
  padding: 0 20px;
  padding-top: 40px;
  padding-bottom: 25px;
}
.forgot {
  text-align: right;
  margin-top: -20px;
}
</style>

/*




