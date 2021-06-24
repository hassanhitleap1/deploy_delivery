<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
<!--    <ul class="navbar-nav">-->
<!--      <li class="nav-item">-->
<!--        <NuxtLink class="nav-link" data-widget="pushmenu" to="/">Home page <i class="fas fa-bars"></i></NuxtLink>-->
<!--&lt;!&ndash;        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>&ndash;&gt;-->
<!--      </li>-->
<!--      <li class="nav-item d-none d-sm-inline-block">-->
<!--        <a href="index3.html" class="nav-link">Home</a>-->
<!--      </li>-->
<!--      <li class="nav-item d-none d-sm-inline-block">-->
<!--        <NuxtLink class="nav-link" data-widget="pushmenu" to="/">Contact</NuxtLink>-->
<!--      </li>-->
<!--    </ul>-->

    <!-- Right navbar links -->
<!--    <MessagesDropdown />-->
  </nav>
  <!-- /.navbar -->
</template>

<script>
    import MessagesDropdown from "./MessagesDropdown";
    export default {
        name: "Navbar",
        components: {MessagesDropdown}
    }
</script>

<style scoped>

</style>
