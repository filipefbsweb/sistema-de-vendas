import api from "@/plugins/axios";

export const addNewProduct = infoProduct =>
  api.post("products.json", { infoProduct });
export const listProducts = api.get("products.json");

export const addNewUser = dataUser => api.post("users.json", { dataUser });
export const getUser = api.get("users.json");

export const finishOrder = listOrder => api.post("orders.json", { listOrder });

export const shoppingList = api.get("orders.json");
