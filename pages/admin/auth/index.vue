<template>
  <div>
    <section>
      <b-form @submit.prevent="onSubmit">
        <b-form-group id="input-group-1" label="Email" label-for="input-1">
          <b-form-input id="input-1" v-model="email" type="email" required placeholder="Email"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="password" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="password"
            type="password"
            required
            placeholder="password"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="success">Submit</b-button>
        <b-button
          variant="success"
          @click="isLogin = !isLogin"
        >Switch to {{ isLogin ? 'Signup' : 'Login'}}</b-button>
      </b-form>
    </section>
  </div>
</template>

<style scoped>
section {
  color: white;
  padding-top: 30px;
}
</style>

<script>
export default {
  data() {
    return {
      isLogin: false,
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      this.$axios.$post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + proces.env.fbAPIKey, )
    }
  },

  layout: "admin"
};
</script>