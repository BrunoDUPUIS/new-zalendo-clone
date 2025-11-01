<!-- eslint-disable vue/no-parsing-error -->
<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import productInfo from './assets/data.json'
</script>

<template>
  <Header />
  <main>
    <div class="container">
      <!-- ------Colonne de gauche du MAIN------ -->
      <div></div>
      <!-- ------Colonne de droite du MAIN------ -->
      <div>
        <h2>{{ productInfo.brand }}</h2>
        <h1>{{ productInfo.name }}</h1>
        <p>{{ productInfo.price }} € <span>TVA incluse</span></p>
        <div class="rate">
          <font-awesome-icon :icon="['fas', 'star']" />
          <font-awesome-icon :icon="['fas', 'star']" />
          <font-awesome-icon :icon="['fas', 'star']" />
          <font-awesome-icon :icon="['fas', 'star']" />
          <font-awesome-icon :icon="['fas', 'star-half-alt']" />
          <span>{{ productInfo.rate }}</span>
        </div>

        <p>Couleur :</p>
        <span>(photo robe) </span>
        <span>(photo robe) </span>
        <span>(photo robe) </span>
        <p class="advise">
          Nous vous recommandons de choisir une taille au-dessus de celle habituelle.
        </p>
        <div class="cart-bloc">
          <button>Ajouter au panier</button> <font-awesome-icon :icon="['far', 'heart']" />
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.container {
  display: flex;
  height: calc(
    100vh - var(--header-top-height) - var(--footer-height) - var(--header-bottom-height)
  );

  /* border: solid 3px red; */
}
.container > div {
  width: 50%;
  border: solid 2px green;
}
.container > div:last-child {
  padding: 25px 0px 25px 100px;
}
h1 + p {
  font-size: 22px;
  margin-bottom: 25px;
}
h1 + p span {
  color: #66676e;
  font-size: 14px;
  font-weight: lighter;
}
svg {
  color: var(--main-black);
  font-size: 22px;
}
.rate {
  margin-bottom: 40px;
}
.rate svg {
  margin-right: 3px;
}
.advise {
  background-color: #efeff0;
  padding: 20px;
  line-height: 20px;
  font-weight: lighter;
  margin-bottom: 10px;
}
button {
  background-color: var(--main-black);
  color: white;
  width: 440px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  opacity: 0.7;
}
button + svg {
  border: solid 1px var(--main-black);
  margin-left: 10px;
  padding: 12px;
  cursor: pointer;
}
button + svg:hover {
  border: solid 2px var(--main-black);
}
.cart-bloc {
  display: flex;
}
</style>
