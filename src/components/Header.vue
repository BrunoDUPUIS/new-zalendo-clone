<template>
  <header>
    <div class="headerTop">
      <div class="container">
        <p>Essayez d'abord, <span>payez après</span></p>
        <p>LIVRAISON & RETOUR <span>GRATUITS *</span></p>
        <p>Retour et <span>remboursement</span></p>
      </div>
    </div>
    <div class="headerBottom">
      <div class="container">
        <nav>
          <a href="#">Femme</a>
          <a href="#">Homme</a>
          <a href="#">Enfant</a>
        </nav>
        <img src="../assets/img/logo_zalendo.svg" alt="logo-zalendo" />
        <nav>
          <font-awesome-icon :icon="['far', 'user']" />
          <font-awesome-icon :icon="['far', 'heart']" />
          <font-awesome-icon :icon="['fas', 'shopping-bag']" />
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* ------HEADER-TOP------ */
.headerTop {
  background-color: var(--light-grey);
}

.headerTop .container {
  height: var(--header-top-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--dark-grey);
  font-size: 12px;
}
span {
  color: var(--main-orange);
}
/* ------HEADER-BOTTOM------ */
.headerBottom {
  border-bottom: 1px solid #d0d1d3;
}
.headerBottom .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-bottom-height);
}
svg {
  color: var(--main-black);
  border: solid 2px white;
  padding: 10px;
}
svg:hover {
  border: solid 2px black;
  cursor: pointer;
}

/* ------LOGO-ZALENDO------ */

img {
  /* border: solid 1px red; */
  width: 155px;
  cursor: pointer;
}

nav {
  display: flex;
  gap: 10px;
  /* border: solid 1px blue; */
  flex: 1;
}

nav:last-child {
  /* border: solid 1px red; */
  justify-content: flex-end;
}
a {
  /* border: solid 1px red; */
  font-weight: bold;
  color: inherit;
  padding: 10px 15px;
  cursor: pointer;
}
a:first-child {
  background-color: var(--main-black);
  color: white;
}
</style>
