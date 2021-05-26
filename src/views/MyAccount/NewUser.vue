<template>
  <div class="v-container">
    <v-row class="d-flex justify-center">
      <v-col cols="11" md="4">
        <h1 class="mt-4">Novo Usuário</h1>

        <v-text-field
          label="Nome"
          type="text"
          v-model="user.name"
        ></v-text-field>

        <v-text-field
          label="E-mail"
          type="email"
          v-model="user.email"
        ></v-text-field>

        <v-text-field
          label="Nome de Usuário"
          type="text"
          v-model="user.nameuser"
        ></v-text-field>

         <v-text-field
          name="image"
          label="Foto"
          v-model="user.photo"
        ></v-text-field>

        <v-text-field
          label="Senha"
          type="password"
          v-model="user.password"
        ></v-text-field>

        <v-text-field
          label="Confirmação senha"
          type="password"
          v-model="confirmPassword"
        ></v-text-field>

        <v-btn color="success" @click="saveUser">Cadastrar</v-btn>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import { addNewUser } from '@/services/endpoints';

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        nameuser: "",
        photo: "",
        password: ""
      },
      confirmPassword: ""
    };
  },
  methods: {
    async saveUser() {
      try {
        if (this.user.password != this.confirmPassword) {
            alert ('A senha e a confirmação precisam ser iguais')
            return;
        }
        await addNewUser(this.user)
        alert ('Usuário cadastrado com sucesso');
        this.user.name = '';
        this.user.email = '';
        this.user.nameuser = '';
        this.user.photo = '';
        this.user.password = '',
        this.confirmPassword = ''
      } catch (e) {
        alert (e);
      }
    }
  },
};
</script>


<style lang="scss" scoped>
</style>