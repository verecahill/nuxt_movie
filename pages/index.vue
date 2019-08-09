<template>
  <div>
    <b-jumbotron class="intro" header="Movie Sharing" lead="Your best movie sharing App"></b-jumbotron>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<style scoped>
.intro {
  padding: 20px;
  height: 170px;
  color: white;
  background-image: url("~assets/images/movie.jpg");
}
</style>

<script>
import PostList from "@/components/Posts/PostList";
export default {
  components: {
    PostList
  },
  // middleware: 'log',
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
  // data() {
  //   return {
  //     loadedPosts: []
  //   };
  // },
  
};
</script>