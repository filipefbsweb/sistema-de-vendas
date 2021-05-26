<template>
  <div class="v-container">
    <v-row class="d-flex justify-center">
      <v-col cols="11" md="4">
        <h1 class="mt-4">Cadastro de Produtos</h1>

        <v-text-field
          name="name"
          label="Nome do Produto"
          v-model="product.name"
        ></v-text-field>

        <v-text-field
          name="value"
          label="Valor R$"
          v-model="product.value"
        ></v-text-field>

        <v-text-field
          name="off"
          label="Desconto"
          v-model="product.off"
        ></v-text-field>

        <v-text-field
          name="image"
          label="Foto"
          v-model="product.image"
        ></v-text-field>

        <v-text-field
          name="description"
          label="Descrição"
          v-model="product.description"
        ></v-text-field>

        <v-btn color="success" @click="saveProduct">Cadastrar</v-btn>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import { addNewProduct } from "@/services/endpoints";

export default {
  data() {
    return {
      product: {
        name: "",
        value: "",
        off: "",
        image: "",
        description: "",
      },
    };
  },
  methods: {
    async saveProduct() {
      try {
        await addNewProduct(this.product);
        alert("Produto cadastro com sucesso");
        this.product.name = "";
        this.product.value = "";
        this.product.off = "";
        this.product.image = "";
        this.product.description = "";
      } catch (e) {
        alert(e);
      }
    },
  },
};
</script>


<style lang="scss" scoped>
</style>