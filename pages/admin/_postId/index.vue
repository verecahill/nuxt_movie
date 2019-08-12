<template>
  <div>
    <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
import axios from "axios";

export default {
  components: {
    AdminPostForm
  },
  layout: "admin",
  middleware:  ['check-auth', 'auth'],
  asyncData(context) {
    return axios
      .get(
        process.env.baseUrl + "/posts/" +
          context.params.postId +
          ".json"
      )
      .then(res => {
        return {
          loadedPost: {...res.data, id: context.params.postId}
        };
      })
      .catch(e => context.error());
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch("editPost", editedPost).then(() => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>