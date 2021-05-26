<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Meus Pedidos</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(itemList, index) in listRequests"
            :key="index"
          >
            <v-expansion-panel-header>
              <span class="title">Código do pedido: {{ index }}</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content
              v-for="(shoppingItem, i) in itemList.listOrder"
              :key="i"
            >
              <div
                class="item"
                v-for="(item, id) in shoppingItem.shopping"
                :key="id"
              >
              <div class="photo">
                <img :src="require(`@/assets/products/${item.infoProduct.image}`)" :alt="item.infoProduct.description" class="item-photo">
              </div>
              <div class="itens">
                <span class="desc-item"><strong>Nome: </strong> {{ item.infoProduct.name }}</span>
                <span class="desc-item"><strong>Descrição: </strong> {{ item.infoProduct.description }}</span>
                <span class="desc-item"><strong>Valor: </strong> {{ item.infoProduct.value }}</span>
              </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { shoppingList } from "@/services/endpoints";

export default {
  data() {
    return {
      listRequests: [],
    };
  },
  methods: {
    async loadShoppingList() {
      try {
        let res = await shoppingList;
        this.listRequests = res.data;
      } catch (e) {
        alert(e);
      }
    },
  },
  mounted() {
    this.loadShoppingList();
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  background: #ffffff;
  border-top: 1px solid #e5e5e5;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.desc-item {
  display: block;
}
.photo {
  width: 100px;
  height: 100px;
  margin-right: 20px;

  .item-photo {
    max-width: 100px;
    max-height: 100px;
  }
}
.title {
  font-size: 16px;
}
</style>