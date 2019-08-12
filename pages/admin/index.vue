<template>
  <div>
    <section>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-button @click="$router.push('/admin/new-post')">Create post</b-button>
          <b-button @click="onLogout">Logout post</b-button>
        </b-navbar-nav>
      </b-navbar>
    </section>
    <section>
      <h1>Existing Post</h1>
    </section>
    <PostList :posts="loadedPosts" isAdmin />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList
  },
  layout: "admin",
  middleware: ['check-auth', 'auth'],
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
    }
  }
};
</script>

<style scoped>
section {
  color: white;
}

</style>