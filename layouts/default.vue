<template>
  <div class="wrapper">
    <LeftNavBar2 />
    <nuxt />
  </div>
</template>

<script>
    import LeftNavBar from "../components/LeftNavBar";
    import LeftNavBar2 from "../components/LeftNavBar2";
    export default {
        components: {LeftNavBar2, LeftNavBar}
    }
</script>
