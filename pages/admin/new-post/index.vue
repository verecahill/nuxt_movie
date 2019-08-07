<template>
  <div>
    <AdminPostForm />
  </div>
</template>

<style scoped>
section {
  color: white;
  padding-top: 30px;
}
</style>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  components: {
    AdminPostForm
  },

  layout: "admin"
};
</script>