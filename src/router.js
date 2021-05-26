import Vue from "vue";
import Router from "vue-router";

// Páginas
import MyAccount from "@/views/MyAccount";
import Produtos from "@/views/Products";
import NewProduct from "@/views/Products/NewProduct.vue";
import MyOrders from "@/views/MyOrders";
import NewUser from "@/views/MyAccount/NewUser.vue";
import MyCar  from "@/views/MyCar"

Vue.use(Router);

const routes = [
  { path: "/", name: "Products", component: Produtos },
  { path: "/minha-conta", name: "MyAccount", component: MyAccount },
  { path: "/meus-pedidos", name: "MyOrders", component: MyOrders },
  { path: "/novo-produto", name: "NewProduct", component: NewProduct },
  { path: "/novo-usuario", name: "NewUser", component: NewUser },
  { path: "/minha-lista", name: "MyCar", component: MyCar }
];

export default new Router({
  routes
});
