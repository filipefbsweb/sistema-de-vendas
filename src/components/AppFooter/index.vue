<template>
<footer class="footer">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="(itemMenu, index) in itensMenu"
        :key="index"
        color="white"
        text
        rounded
        class="my-2"
        :to="{name: itemMenu.to}"
      >
      {{ itemMenu.label }}
      </v-btn>
      <v-col cols="12" class="primary py-4 text-center white--text">
        <strong>Two Clicks - Sistemas WEB</strong>
      </v-col>
    </v-row>
  </footer>
</template>

<script>
import menu from "../AppMenu";

export default {
  data: () => ({
    itensMenu: "",
  }),
  mounted() {
    this.itensMenu = menu;
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background: #576574;
  margin-top: 50px;
}
</style>