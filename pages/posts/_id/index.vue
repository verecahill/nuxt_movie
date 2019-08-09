<template>
  <div>
    <b-jumbotron>
      <template slot="header" class="title">{{loadedPosts.title}}</template>

      <template slot="lead">{{loadedPosts.previewText}}</template>

      <h6>Written by {{loadedPosts.author}}</h6>
      <h6>{{loadedPosts.updatedDate | date}}</h6>
      <hr class="my-4" />

      <p>{{loadedPosts.content}}</p>

      <b-button variant="primary" href="#">Do Something</b-button>
      <b-button variant="success" href="#">Do Something Else</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import axios from "axios";

export default {
  asyncData(context) {
    return axios
      .get(
        "https://heavysol-dc615.firebaseio.com/posts/" +
          context.params.id +
          ".json"
      )
      .then(res => {
        return {
          loadedPosts: res.data
        };
      })
      .catch(e => context.error(e));
  },
  head: {
    title: 'A Blog Post'
  }
};
</script>

<style scoped>
.title {
  font-size: 4rem;
}
</style>
