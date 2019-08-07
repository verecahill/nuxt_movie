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
  asyncData(context, callback) {
    console.log(context);
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: "1",
            title: "First Post",
            previewText: "this is our first post",
            thumbnail:
              "https://cdn.pixabay.com/photo/2018/01/29/19/00/park-3116883_960_720.jpg"
          },
          {
            id: "2",
            title: "Second Post",
            previewText: "this is our first post",
            thumbnail:
              "https://cdn.pixabay.com/photo/2018/01/29/19/00/park-3116883_960_720.jpg"
          },
          {
            id: "3",
            title: "Third Post",
            previewText: "this is our first post",
            thumbnail:
              "https://cdn.pixabay.com/photo/2018/01/29/19/00/park-3116883_960_720.jpg"
          }
        ]
      });
    }, 1000);
  },
  // data() {
  //   return {
  //     loadedPosts: []
  //   };
  // },
  created() {}
};
</script>