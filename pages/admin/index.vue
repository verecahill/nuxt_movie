<template>
  <div>
    <section>
      <button @click="$router.push('/admin/new-post')">Create post</button>
    </section>
    <section>
      <h1>Existing Post</h1>
    </section>
    <PostList isAdmin/>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList
  },
  layout: 'admin',
};
</script>

<style scoped>
section {
  color: white;
}
</style>