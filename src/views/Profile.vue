<template>
  <main>
      <h1>Profile</h1>

      <section v-for="(item, index) in profile" :key="index">
          <h2>{{ item.name }}</h2>
          <img :src="item.img" alt="">
          <p>{{ item.description }}</p>
      </section>
  </main>
</template>

<script>
export default {
    data() {
        return {
            profile: []
        }
    },

    created() {
        this.getProfile();
    },

    methods: {
        getProfile() {
            this.axios.get('/profile')
                .then( res => {
                    this.profile = res.data
                    console.log(res.data)
                })
                .catch( e => {
                    console.log(e.response)
                })
        }
    }
}
</script>

<style>

</style>