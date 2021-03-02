<template>
  <main>
    <h1>LOGIN</h1>

    <section>
        <form @submit.prevent="login">
            <input v-model="user.email" type="email" placeholder="Email...">
            <input v-model="user.password" type="text" placeholder="Password...">
            <input type="submit" value="SignUp">
        </form>
    </section>

    <section v-if="msg != ''">
        <p>{{ msg }}</p>
    </section>

  </main>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            user: { 
                email:'', 
                password: ''
            },

            msg: ''
        }
    },

    methods: {
        ...mapActions(['saveUser']),

        login() {
            this.axios.post('/signin', this.user)
                .then ( res => {
                    const token = res.data.token;
                    this.saveUser(token);
                })
                .catch ( e => {
                    this.msg = e.response.data.message
                })
        }
    }
}
</script>

<style>

</style>