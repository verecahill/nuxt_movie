<template>
  <div>
    <section>
      <b-form @submit.prevent="onSave" @reset="onReset">
        <b-form-group
          id="input-group-1"
          label="Author"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="editedPost.author"
            type="text"
            required
            placeholder="Author"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Title" label-for="input-2">
          <b-form-input id="input-2" v-model="editedPost.title" required placeholder="Title"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Preview Text" label-for="input-2">
          <b-form-input id="input-2" v-model="editedPost.previewText" required placeholder="Preview Text"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Thunbmail Image" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="editedPost.thumbnail"
            required
            placeholder="Thunbmail Image URL"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Content" label-for="input-4">
          <b-form-textarea
            rows="3"
            max-rows="6"
            id="input-4"
            v-model="editedPost.content"
            required
            placeholder="Content"
          ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="success">Submit</b-button>
        <b-button type="reset" variant="warning">Reset</b-button>
        <b-button @click="cancel" variant="danger">Cancel</b-button>
      </b-form>
    </section>
  </div>
</template>

<style scoped>
section {
  color: white;
  padding-top: 30px;
}
</style>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            thumbnail: "",
            content: "",
            previewText: ""
          }
    };
  },
  methods: {
    onSave() {
      this.$emit('submit', this.editedPost);
    },
    onReset(evt) {
      // evt.preventDefault()
      // Reset our form values
      this.editedPost.title = "";
      this.editedPost.thumbnailLink = "";
      this.editedPost.content = "";
      this.editedPost.author = "";
    },
    cancel() {
      this.$router.push("/admin");
    }
  }
};
</script>