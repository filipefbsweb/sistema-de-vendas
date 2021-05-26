<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Minha Conta</h1>
        <div class="info-user">
          <v-text-field
            v-model="user[0].name"
            label="Nome"
            filled
            disabled
          ></v-text-field>

        <v-text-field
          label="E-mail"
          v-model="user[0].email"
          filled
          disabled
        ></v-text-field>

        <v-text-field
          label="Nome de usuário"
          v-model="user[0].nameuser"
          filled
          disabled
        ></v-text-field>

        <v-text-field
          label="Senha"
          v-model="user.password"
          filled
          disabled
        ></v-text-field>
        
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState ({
      user: 'user'
    })
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
</style>