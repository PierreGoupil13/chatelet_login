<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="container text-center">
      <div class="column">
        <div class="row">
          <h1 class="display-4">Sign in</h1>
        </div>
        <div class="row">
          <form>
            <div class="form-outline mb-4">
              <label class="form-label" for="emailform">Email address</label>
              <input type="email" id="emailform" class="form-control" />
            </div>


            <div class="form-outline mb-4">
              <label class="form-label" for="pwdform">Password</label>
              <input type="password" id="pwdform" class="form-control" />
            </div>


            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label class="form-check-label" for="form2Example31"> Remember me </label>
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
          </form>
        </div>
      </div>
    </div>






  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>
