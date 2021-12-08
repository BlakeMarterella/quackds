<template>
  <nav id="header-main" class="navbar navbar-expand-md navbar-top navbar-dark">
    <slot name="brand">
      <router-link
        :to="$route.path"
        class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
      >
        {{ $route.name }}
      </router-link>
      </slot>
    <ul class="navbar-nav align-items-center d-none d-md-flex">
      <li class="nav-item dropdown down">
        <dropdown-nav class="nav-link pr-0">
          <div class="dropdown-toggle nav-link" data-toggle="dropdown">
            <div class="media align-items-center" >
              <span class="avatar avatar-sm rounded-circle">
                <img
                  alt="Image placeholder"
                  src="../../assets/img/avatar.jpg"
                />
              </span>
              <div class="media-body ml-2 d-none d-lg-block">
                <span class="mb-0 text-sm font-weight-bold">User's Name</span>
              </div>
            </div>
          </div>
          <div class="dropdown-header noti-title">
            <h6 class="text-overflow m-0">Welcome!</h6>
          </div>
          <router-link to="/profile" class="dropdown-item">
            <i class="ni ni-single-02"></i>
            <span>My profile</span>
          </router-link>
          <router-link to="/profile" class="dropdown-item">
            <i class="ni ni-settings-gear-65"></i>
            <span>Settings</span>
          </router-link>
          <router-link to="/profile" class="dropdown-item">
            <i class="ni ni-support-16"></i>
            <span>Support</span>
          </router-link>
          <div class="dropdown-divider"></div>
          <router-link to="/profile" class="dropdown-item">
            <i class="ni ni-user-run"></i>
            <span>Logout</span>
          </router-link>
        </dropdown-nav>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss">
</style>