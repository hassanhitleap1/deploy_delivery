<template>
  <div class="wrapper">
    <div class="container-fluid">
      <div class="row">
         <Header />
        <LeftNavBar />
        <div class="col-sm p-3 min-vh-100">
          <!-- content -->
            <nuxt />
          <!-- end  content -->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    import LeftNavBar from "../components/LeftNavBar";
    import LeftNavBar2 from "../components/LeftNavBar2";
    import Header from "../components/Header";
    export default {
        components: {Header, LeftNavBar2, LeftNavBar}
    }
</script>
