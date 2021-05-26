<template>
  <v-card class="pt-0">
    <v-app-bar
      color="primary"
      dark
      center
      height="60"
      max-width="100%"
      class="mx-0"
    >
      <v-row>
        <v-col class="d-flex align-center">
          <v-app-bar-nav-icon @click="drawer = true">
            <div class="icon-menu">
              <box-icon name="menu" color="#ffffff"></box-icon>
            </div>
          </v-app-bar-nav-icon>
          <v-toolbar-title>MENU</v-toolbar-title>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex align-center justify-end mb-6">
          <router-link :to="{name: 'MyCar'}" class="list-order">
          <box-icon name="cart" type="solid" color="#ffffff"></box-icon>
          <span class="count-itens-car">{{ shoppingCar }}</span>
          </router-link>
        </v-col>
      </v-row>
    </v-app-bar>

    <div class="menu">
      <v-navigation-drawer v-model="drawer" fixed temporary class="pl-5">
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="primary--text text--accent-4"
          >
            <v-list-item class="item-photo-profile pb-10 pr-5">
              <div class="profile-photo">
                <img src="@/assets/sem-foto.jpg" alt="Sem Foto Perfil" />
              </div>
            </v-list-item>

            <v-list-item
              class="option-menu"
              v-for="(itemMenu, index) in itensMenu"
              :key="index"
            >
              <v-list-item-icon>
                <box-icon
                  type="solid"
                  :name="itemMenu.icon"
                  color="#222f3e"
                ></box-icon>
              </v-list-item-icon>
              <router-link :to="{ name: itemMenu.to }" class="link-menu">
                <v-list-item-title>
                  <span class="item-menu">{{ itemMenu.label }}</span>
                </v-list-item-title>
              </router-link>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </v-card>
</template>

<script>
import menu from "../AppMenu";
import { mapState } from "vuex";

export default {
  computed: mapState({
    shoppingCar: (state) => state.shoppingCar.length,
  }),
  data() {
    return {
      drawer: false,
      group: false,
      itensMenu: "",
    };
  },
  mounted() {
    this.itensMenu = menu;
  },
};
</script>

<style lang="scss">
.menu {
  position: fixed;
  width: 100%;
  z-index: 99;
  max-width: 1440px;
}
.option-menu {
  transition: 0.3s;
  &:hover {
    margin-left: 10px;
  }
}
.item-photo-profile {
  &:hover:before {
    opacity: 1;
    background: #fff;
  }
}
.profile-photo {
  width: 100%;
  img {
    width: 100%;
    border-radius: 50%;
  }
}
.item-menu {
  color: #222f3e;
  font-weight: bold;
  font-size: 16px !important;
}
.link-menu {
  text-decoration: none;
}
.count-itens-car {
  background: #fff;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  color: #000;
  font-weight: bold;
  padding-top: 2px;
  margin-left: 10px;
  cursor: pointer;
  transition: .2s;

  &:hover {
    background: #000;
    color: #fff;
  }
}
.list-order {
  text-decoration: none;
  display: flex;
}
</style>