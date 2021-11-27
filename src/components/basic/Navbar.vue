<template>
  <nav id="sidenav-main" class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white">
    <navbar-toggle />
    <div class="container-fluid">
      <!-- <navbar-toggle-button @click="showSidebar">
        <span class="navbar-toggler-icon"></span>
      </navbar-toggle-button> -->
      <router-link class="navbar-brand" to="/">
        <img :src="logo" class="navbar-brand-img" alt="..." />
      </router-link>

      <slot name="brand" class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">
        <router-link class="navbar-brand" to="/">
          <img :src="logo" class="navbar-brand-img" alt="..." />
        </router-link>
      </slot>
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template v-slot:links>
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard',
          }"
        />

        <sidebar-item
          :link="{
            name: 'Icons',
            icon: 'ni ni-planet text-blue',
            path: '/icons',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Maps',
            icon: 'ni ni-pin-3 text-orange',
            path: '/maps',
          }"
        />
        <sidebar-item
          :link="{
            name: 'User Profile',
            icon: 'ni ni-single-02 text-yellow',
            path: '/profile',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Tables',
            icon: 'ni ni-bullet-list-67 text-red',
            path: '/tables',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Login',
            icon: 'ni ni-key-25 text-info',
            path: '/login',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Register',
            icon: 'ni ni-circle-08 text-pink',
            path: '/register',
          }"
        />
      </template>
    </side-bar>
    </div>
  </nav>
</template>
<script>
import NavbarToggle from "../basic/NavbarToggle.vue"

export default {
  name: "Navbar",
  components: {
    NavbarToggle,
  },
  data() {
    return {
      toggled: false,
    };
  },
  methods: {
    closeMenu() {
      this.toggled = false;
    },
  },
}
</script>