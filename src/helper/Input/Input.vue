<template>
  <v-text-field dense color="green" :label="label" v-model="value" outlined single-line />
</template>

<script>
//import { reactive, computed } from "@vue/composition-api";
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  setup() {
    let inputElement = null;

    return inputElement;
  }
};
</script>