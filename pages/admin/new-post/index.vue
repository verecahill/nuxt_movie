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
  components: {
    AdminPostForm
  },
  methods: {
    onSubmitted(postData) {
      // Firestore REST API
      const projectID = "heavysol-dc615";
      const key = "AIzaSyBfR1_9IW2LZ98Vr6rg84ET5DSwKT2JNGU";
      const doc = "posts";
      const firestoreUrl = `https://firestore.googleapis.com/v1beta1/projects/${projectID}/databases/(default)/documents/${doc}`;
      // fetch(url).then(response => response.json()).then(json => console.log(json.documents));
      const firestoreData = {
        fields: {
          author: { stringValue: postData.author },
          content: { stringValue: postData.content },
          title: { stringValue: postData.title }
        }
      };
      // axios.post(firestoreUrl, firestoreData)
      //   .then(result => console.log(result))
      //   .catch(e => console.log(e));

      // Firebase REST API
      // const firebaseUrl = "https://heavysol-dc615.firebaseio.com/posts.json";
      // axios
      //   .post(firebaseUrl, { ...postData, updatedDate: new Date() })
      //   .then(result => this.$router.push("/admin"))
      //   .catch(e => console.log(e));
      this.$store.dispatch('addPost', postData).then(
        () => {
          this.$router.push("/admin");
        }
      )
    }
  }
};
</script>