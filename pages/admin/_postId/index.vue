<template>
  <div>
    <AdminPostForm :post="loadedPost" />
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: "woojin",
        title: "my post",
        content: "Amazing post",
        thumbnailLink:
          "https://cdn.pixabay.com/photo/2019/06/01/00/04/peony-4243278_960_720.jpg"
      }
    };
  },

  layout: "admin"
};
</script>