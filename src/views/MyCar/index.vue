<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Minha Lista de Compras</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(product, index) in shoppingCar"
            :key="index"
          >
            <v-expansion-panel-header class="produt-title">
              {{ product.infoProduct.name }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <strong>Descrição:</strong> {{ product.infoProduct.description }}
              <br />
              <strong>Valor:</strong> R$ {{ product.infoProduct.value }}
              <br />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col class="d-flex justify-space-between" cols="12" md="4">
        <v-btn color="success" @click="saveOrder">Finalizar compra</v-btn>
        <v-btn color="error" @click="clearCar">Limpar Carrinho</v-btn>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" top>
      Seu carrinho está vazio, volte para produtos!
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { finishOrder } from "@/services/endpoints";
export default {
  computed: {
    ...mapState({
      shoppingCar: "shoppingCar",
      user: "user",
    }),
  },
  data() {
    return {
      snackbar: false,
    };
  },
  methods: {
    ...mapActions({
      clearCar: "clearCar",
    }),
    async saveOrder() {
      try {
        if (this.shoppingCar.length == 0) {
          this.snackbar = true;
          setTimeout(() => {
            this.snackbar = false;
          }, 3000);
          return;
        }
        let listOrder = [
          {
            user: this.user,
            shopping: this.shoppingCar,
          },
        ];
        await finishOrder(listOrder);
        alert("Pedido realizado com sucesso");
        this.clearCar();
        this.$router.push("/");
      } catch (e) {
        alert(e);
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.produt-title {
  font-size: 16px;
  font-weight: bold;
}
</style>