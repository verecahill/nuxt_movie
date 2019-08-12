<template>
  <div>
    <AdminPostForm @submit="onSubmitted" />
  </div>
</template>

<style scoped>
section {
  color: white;
  padding-top: 30px;
}
</style>

<script>
import axios from "axios";
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  layout: "admin",
  middleware:  ['check-auth', 'auth'],
  components: {
    AdminPostForm
  },
  methods: {
    onSubmitted(postData) {
      // Firestore REST API
      // const projectID = "";
      // const key = "";
      // const doc = "posts";
      // const firestoreUrl = `https://firestore.googleapis.com/v1beta1/projects/${projectID}/databases/(default)/documents/${doc}`;
      // // fetch(url).then(response => response.json()).then(json => console.log(json.documents));
      // const firestoreData = {
      //   fields: {
      //     author: { stringValue: postData.author },
      //     content: { stringValue: postData.content },
      //     title: { stringValue: postData.title }
      //   }
      // };
      this.$store.dispatch('addPost', postData).then(
        () => {
          this.$router.push("/admin");
        }
      )
    }
  }
};
</script>