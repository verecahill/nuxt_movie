<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <nuxt-link class="navbar-brand" to="/">Mblog</nuxt-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav v-model="showCollapse">
      <b-navbar-nav>
        <span @click="closeCollapse" class="nav-item">
          <nuxt-link class="nav-item" to="/posts">Posts</nuxt-link>
        </span>
        <span @click="closeCollapse" class="nav-item">
          <nuxt-link class="nav-item" to="/about">About</nuxt-link>
        </span>
        <span @click="closeCollapse" class="nav-item">
          <nuxt-link class="nav-item" to="/admin">Admin</nuxt-link>
        </span>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          <b-dropdown-item href="/admin/auth">Sign In</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      showCollapse: false
    };
  },
  methods: {
    closeCollapse() {
      this.showCollapse = false;
      console.log("click showcollapse");
    }
  }
};
</script>

<style scoped>
.nav-item {
  text-decoration: none;
  color: lightgrey;
  margin-bottom: 10px;
  margin-left: 15px;
}
.nav-brand {
  text-decoration: none;
  color: white;
}

.navbar-brand{
  text-decoration: none;
}
</style>
