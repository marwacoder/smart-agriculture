<template>
  <div>
    <v-card pt-5 class="auth-container">
      <v-container>
        <v-layout wrap justify-space-around>
          <v-flex xs12 md12>
            <v-form>
              <p>Please enter your email and an instruction will be send to you on how to reset your password</p>

              <v-text-field dense color="green" label="Email Address" outlined single-line />
              <v-btn block type="submit" medium color="success" dark>Sign In</v-btn>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  //   props: {
  //     show: {
  //       type: Function,
  //       required: true
  //     }
  //   }
};
</script>