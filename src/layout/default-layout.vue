<template>
  <div>
    <v-app-bar app color="white">
      <v-btn class="ma-2" outlined small fab color="lime" @click="openDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title>SMART AGRICULTURE</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer mobile-break-point="960" class="green" v-model="drawer" app>
      <v-row mt-5 justify="space-around">
        <v-icon size="65" wi color="white center darken-2">mdi-domain</v-icon>
      </v-row>
      <v-divider></v-divider>
      <template>
        <v-list dense class="list pt-3" nav>
          <v-list-item v-for="item in state.items" :key="item.title" router :to="item.route">
            <v-list-item-icon>
              <v-icon class="font-weight-light" color="white">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <main class="ma-5">
      <router-view />
    </main>
    <v-footer class="font-weight-medium" color="white">
      <v-col class="text-center" cols="12">
        <p class="light-green--text">Software Business Solution</p>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
import { reactive } from "@vue/composition-api";
import { drawerToggle } from "../comp-function/toogle";

export default {
  components: {},
  setup() {
    let { drawer, openDrawer } = drawerToggle();
    const state = reactive({
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", route: "/dashboard" },
        { title: "Stock", icon: "mdi-image", route: "/stock" },
        { title: "DispatchStock", icon: "mdi-image", route: "/dispatch" },
        { title: "Driver", icon: "mdi-image", route: "/driver" },
        { title: "OutStock", icon: "mdi-image", route: "/outstock" }
      ]
    });
    // const mapItem = item => {
    //   return {
    //     ...item,
    //     children: item.children ? item.children.map(this.mapItem) : undefined,
    //     title: this.$t(item.title)
    //   };
    // };
    return {
      drawer,
      openDrawer,
      state
    };
  }
};
</script>
<style scoped>
</style>