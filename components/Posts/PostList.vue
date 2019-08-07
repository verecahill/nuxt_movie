<template>
  <b-card-group columns>
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText"
    />
  </b-card-group>
</template>

<style scoped>
</style>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true,
    }
  },
  components: {
    PostPreview
  }
};
</script>