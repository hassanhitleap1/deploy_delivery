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
          <form @submit.prevent="login" >
            <div class="form-group">
              <label for="uname">Email address</label>
              <input type="text"  v-model="form.uname" name="uname"  class="form-control" id="uname"  placeholder="Enter uname">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password"  v-model="form.password" name="password" id="password"  class="form-control"  placeholder="Enter Password">
            </div>
            <div class="form-group">
              <p class="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
            </div>
            <div class="col-md-12 text-center ">
              <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
            </div>
            <div class="col-md-12 ">
              <div class="login-or">
                <hr class="hr-or">

              </div>
            </div>
            <div class="form-group">
              <p class="text-center"> <NuxtLink to="/auth/singup"> singup here  </NuxtLink></p>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "login",
        layout: 'auth',
        data(){
            return {
                form:{
                    uname:"",
                    password:""
                }
            }
        },
        methods: {
            async login() {
                await this.$auth.login({
                    data: this.form
                });
                this.$router.push({
                    path: '/'
                });
            }
        }
    }
</script>

<style scoped>

</style>
