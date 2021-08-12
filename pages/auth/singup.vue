<template>
  <div class="row">
    <div class="col-md-5 mx-auto">
      <div id="first">
        <div class="myform form ">
          <div class="logo mb-3">
            <div class="col-md-12 text-center">
              <h1>Login</h1>
            </div>
          </div>
          <form action="" method="post" name="login">
            <div class="form-group">
              <label >Email address</label>
              <input type="email" name="email"  class="form-control"  v-model="form.email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label >Name</label>
              <input type="text" name="email"  class="form-control"  aria-describedby="emailHelp" placeholder="Enter you Name">
            </div>
            <div class="form-group">
              <label >Password</label>
              <input type="password" name="password"  class="form-control"  placeholder="Enter Password">
            </div>

            <div class="form-group">
              <label > confirm password </label>
              <input type="password" name="conf-password"  class="form-control" placeholder="confirm password ">
            </div>
            <div class="form-group">
                <p class="text-center"> <NuxtLink to="/auth/singup"> login   </NuxtLink></p>
            </div>
            <div class="col-md-12 text-center ">
              <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
            </div>
            <div class="col-md-12 ">
              <div class="login-or">
                <hr class="hr-or">

              </div>
            </div>
            <div class="col-md-12 mb-3">
              <p class="text-center">
                <a href="javascript:void();" class="google btn mybtn"><i class="fa fa-google-plus">
                </i> Signup using Google
                </a>
              </p>
            </div>
            <div class="form-group">
              <p class="text-center">
                <NuxtLink to="/auth/login" > Login hear </NuxtLink>
              </p>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "singup",
        layout: 'auth',
    }
</script>

<style scoped>

</style>
