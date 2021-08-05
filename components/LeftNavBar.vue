<template>
  <div class="col-sm-auto bg-light sticky-top">
    <div class="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
      <a href="/" class="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
        <i class="bi-bootstrap fs-1"></i>
      </a>
      <ul class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100 px-3 align-items-center">
        <li class="nav-item">
          <a href="#" class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
            <NuxtLink to="/"  class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="area"> <i class="bi-house fs-1"></i></NuxtLink>
          </a>
        </li>
        <li>
          <a href="#" class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
            <NuxtLink to="/regions"  class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="area"> <i class="bi-house fs-1"></i></NuxtLink>
          </a>
        </li>
        <li>
          <NuxtLink to="/areas"  class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="area"> <i class=" bi bi-map fs-1"></i></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/users"  class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="area"> <i class="bi-people fs-1"></i></NuxtLink>
        </li>

      </ul>
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi-person-circle h2"></i>
        </a>
        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "LeftNavBar"
    }
</script>

<style scoped>

</style>
