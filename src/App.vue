<template>
  <v-app>
    <div class="two-clicks">
      <app-header />
      <router-view />
      <app-footer />
    </div>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { getUser } from "@/services/endpoints";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  computed: {
    ...mapState({
      shoppingCar: "shoppingCar",
      user: "user",
    }),
  },
  methods: {
    ...mapActions({
      setUser: "setUser",
    }),
    async saveUserStore() {
      if (!this.user[0]) {
        let resUser = await getUser;
        for (let key in resUser.data) {
          let user = {
            name: resUser.data[key].dataUser.name,
            email: resUser.data[key].dataUser.email,
            nameuser: resUser.data[key].dataUser.nameuser
          };

          this.setUser(user);
        }
      }
    },
  },
  mounted() {
    this.saveUserStore();
  }
};
</script>

<style lang="scss" scoped>
.two-clicks {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}
</style>