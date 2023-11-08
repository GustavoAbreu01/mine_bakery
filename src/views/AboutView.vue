<script setup lang="ts">
import cat from '../assets/img/seamless-pattern-cups-teapots-cookies-cakes-other-sweets-vector-icons-black-white-sketch-style_25499-removebg.png'
</script>

<template>
  <div>
    <img class="cat" :src="cat" />
    <div class="container_about">
      <div class="about_info">
        <h1>Sobre o projeto</h1>
        <p>Este projeto foi desenvolvido com o objetivo de aprendizado em vue,
          tendo um pouco de contato com essa framework, sendo assim vendo suas possíveis utilizações.</p>
        <p>Além de conhecer seus métodos de ligações com API's e ter um pequeno conhecimento sobre e como utilizar.</p>
        <RouterLink to="/" class="return_home">
          <font-awesome-icon class="category_icons" :icon="['fas', 'arrow-left']" />
          <p>Retornar para a Home</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style>

.marquee_text {
  font-size: 2rem;
  font-family: Caveat-bold;
  color: var(--color-white-two);
  text-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}

.container_marquee {
  width: 50vw;
  height: 10vh;
  display: flex;
  align-items: center;
  border-radius: 100px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  background-color: var(--persian-red);
}

.return_home {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  color: var(--persian-red);
  text-decoration: none;
  font-size: 1.5rem;
  font-family: Caveat-bold;
}

.about_info {
  width: 50vw;
  height: 50vh;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background-color: var(--color-white-two);
  border-radius: 16px;
  border: 5px solid var(--persian-red);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}

.container_about {
  position: absolute;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 110;
  font-family: Outfit-light;
}

.cat {
  position: absolute;
  background-color: var(--color-white-two);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
}
</style>
