<template>
  <b-card
    :title="title"
    :img-src="thumbnail"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <nuxt-link :to="postLink">
      <b-card-text>{{previewText}}</b-card-text>
      <b-button variant="primary">Go to post</b-button>
    </nuxt-link>
  </b-card>
</template>

<script>
export default {
    name: 'PostPreview',
    props: {
        id: {
            type: String,
            required: true,
        },
        isAdmin:{
          type: Boolean,
          required: true
        },
        title: {
            type: String,
            required: true
        },
        previewText: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
            required: true,
        }
    },
    computed: {
      postLink(){
        return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id;
      }
    }
}
</script>
