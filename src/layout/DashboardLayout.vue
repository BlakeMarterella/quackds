<!-- This setups the foundation for the internals of the site -->
<!-- This manages setting up the navbar, header, and footer which will be seen on all of the pages-->
<template>
    <div class="wrapper">
        <!-- TODO put the navbar here -->
        <div class="main-content">
            <page-header></page-header>
            <router-view></router-view>
            <page-footer></page-footer>
        </div>
    </div>
</template>
<script>
import PageHeader from "../components/basic/Header.vue";
import PageFooter from "../components/basic/Footer.vue";

export default {
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>
<style lang="scss"></style>
