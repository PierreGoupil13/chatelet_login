<template>
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <img src="./assets/logo.png" alt="Logo" width="24" height="24" class="d-inline-block align-text-top me-2">
          Clinique LE CHATELET
        </router-link>
        <router-link to="/recommandations" class="d-flex btn btn-secondary">Recommandations de la CNIL</router-link>
      </div>
    </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
