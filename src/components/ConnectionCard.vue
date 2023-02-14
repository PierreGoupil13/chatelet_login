<template>
  <div class="card d-flex mx-auto text-center w-25 h-25 mt-5">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Connexion</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Inscription</button>
        </li>
      </ul>
    </div>

    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
        <div class="card-body">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
            <label for="floatingInput">Adresse mail*</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="P@ssw0rd" required>
            <label for="floatingPassword">Mot de passe*</label>
          </div>
          <!-- <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
            <label class="form-check-label" for="form2Example31"> Remember me </label>
          </div> -->
          <button type="submit" class="btn btn-primary btn-block mt-3">Se connecter</button>
        </div>
      </div>

      <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
        <div class="card-body">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput2" placeholder="name2@example.com" required>
            <label for="floatingInput">Adresse mail*</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword2" placeholder="P@ssw0rd2" required>
            <label for="floatingPassword">Ancien mot de passe*</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword3" placeholder="P@ssw0rd3" required>
            <label for="floatingPassword">Nouveau mot de passe*</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword4" placeholder="P@ssw0rd4" required>
            <label for="floatingPassword">Confirmation du mot de passe*</label>
          </div>
          <button type="submit" class="btn btn-primary btn-block mt-3">S'inscrire</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConnectionCard',
  props: {
    mail: String,
    formerPassaword: String,
    actualPassword: String,
    newPassword: String,
    confirmedPassword: String
  }
}
</script>

<style scoped>

</style>