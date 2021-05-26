<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="my-5">Lista de Produtos</h1>
      </v-col>
    </v-row>
    <v-row no-gutters class="d-flex justify-space-between">
      <v-col
        cols="12"
        sm="6"
        md="4"
        class="product"
        v-for="(product, index) in products"
        :key="index"
      >
        <div class="product-photo">
          <img
            :src="require(`@/assets/products/${product.infoProduct.image}`)"
            :alt="`${product.infoProduct.description}`"
            class="img-product"
          />
        </div>
        <div class="info-product">
          <div class="value">R$ {{ product.infoProduct.value }}</div>
          <div class="off" v-if="product.infoProduct.off">
            {{ product.infoProduct.off }}% OFF
          </div>
          <div class="description">
            {{ product.infoProduct.description }}
          </div>
          <div class="buttons">
            <v-btn
              block
              color="success"
              @click="addProductCar(product)"
              :value="index"
            >
              Adicionar ao carrinho
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" top> Produto adicionado ao carrinho com sucesso! </v-snackbar>
  </v-container>
</template>

<script>
import { listProducts } from "@/services/endpoints";
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      shoppingCar: "shoppingCar",
      user: "user",
    }),
  },
  data() {
    return {
      products: [],
      snackbar: false,
    };
  },
  methods: {
    ...mapActions({
      addItemCar: "addItemCar",
    }),
    async loadProducts() {
      try {
        let res = await listProducts;
        this.products = res.data;
      } catch (e) {
        alert("Não foi possível carregar produtos" + e);
      }
    },
    addProductCar(product) {
      this.addItemCar(product);
      this.snackbar = true;
      setTimeout(() => {
        this.snackbar = false;
      }, 3000);
    },
  },
  mounted() {
    this.loadProducts();
  },
};
</script>

<style lang="scss" scoped>
.product {
  height: auto;
  max-width: 450px;
  margin-top: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  box-shadow: 0px 2px 4px #ccc;
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 2px 4px #666;
  }

  .product-photo {
    width: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
    height: 300px;
    .img-product {
      max-width: 280px;
      max-height: 280px;
    }
  }

  .info-product {
    width: 100%;
    background: #ffffff;
    border-top: 1px solid #e5e5e5;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    margin: 0 auto;
    max-width: 450px;
    border-radius: 20px;

    .value {
      font-size: 22px;
      font-weight: 600;
      padding-left: 5px;
    }
    .off {
      width: 100px;
      background: #000;
      color: #fff;
      font-size: 16px;
      border-radius: 10px;
      border: 1px solid #ccc;
      padding: 5px 10px;
      box-sizing: border-box;
      text-align: center;
      position: absolute;
      right: 20px;
      top: 20px;
    }

    .description {
      width: 100%;
      padding-top: 15px;
      height: 70px;
    }
  }

  .buttons {
    margin-top: 10px;
  }
}
</style>