<template>
  <div class="mt-5">
    <h1>Recommandations de la CNIL</h1>
    <h5 class="mt-5">Dans le cas d’une authentification des utilisateurs basée sur des mots de passe, il faut appliquer les règles de complexité suivantes pour le mot de passe :</h5>
    <ul>
      <li>au moins 8 caractères comportant 3 des 4 types de caractères (majuscules, minuscules, chiffres, caractères spéciaux) si l’authentification prévoit une restriction de l’accès au compte (cas le plus courant) comme :
        <ul><li>une temporisation d’accès au compte après plusieurs échecs ;
un « Captcha » ;
un verrouillage du compte après 10 échecs ;</li></ul></li>



12 caractères minimum et 4 types de caractères si l’authentification repose uniquement sur un mot de passe ;
plus de 5 caractères si l’authentification comprend une information complémentaire. L’information complémentaire doit utiliser un identifiant confidentiel d’au moins 7 caractères et bloquer le compte à la 5e tentative infructueuse ;
le mot de passe peut ne faire que 4 caractères si l’authentification s’appuie sur un matériel détenu par la personne et si le mot de passe n’est utilisé que pour déverrouiller le dispositif matériel détenu en propre par la personne (par exemple une carte à puce ou téléphone portable) et qui celui-ci se bloque à la 3e tentative infructueuse.
    </ul>
  </div>
</template>

<script>
export default {
  name: "AdviceView",
};
</script>