<template>
  <div class="wrapper">
    <Preloader />
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
    import Preloader from "../components/Preloader";
    import Navbar from "../components/Navbar";
    export default {
        components: {Navbar, Preloader}
    }
</script>
