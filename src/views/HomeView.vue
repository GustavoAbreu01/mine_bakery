<script setup lang="ts">
import cakeIntro from '../assets/img/cake_visualOne.jpg'
import Cake from '../components/Cakes.vue'

</script>

<template>
  <main>
    <section class="intro_section">
      <div class="cake_container">
        <img class="cake_intro" :src="cakeIntro" />
      </div>
      <div class="intro_container">
          <h1 class="title_intro">Olá, seja bem vindo!</h1>
          <p class="description_intro">
            Aqui você encontra os melhores bolos e doces para sua festa!
          </p>
          <p class="sub_description_intro">
            Uma padaria é um local onde são produzidos e vendidos pães e produtos de panificação frescos. 
            Elas são conhecidas por oferecer uma variedade de opções saborosas, desde pães 
            tradicionais a doces e salgados.
          </p>
        </div>
    </section>
    <section class="intro_cakes">
      <div class="cakes_list_container">
        <Cake />
      </div>
    </section>
  </main>
</template>

<style>
.cake_intro {
  width: 25rem;
  display: flex;
  align-self: center;
  border-radius: 0 50px 50px 0;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  transform: translateX(-5rem);
}

.cake_container {
  background-color: var(--persian-red);
  box-shadow: 0px 0px 10px 0px rgb(0, 0, 0) inset;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  padding-left: 5rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.intro_section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
}

.intro_cakes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.intro_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 5rem;
  width: 50%;
  font-size: 1.5rem;
}

.title_intro {
  font-family: Caveat-bold;
}

.description_intro {
  font-family: Caveat-regular;
  display: flex;
  align-self: flex-start;
}

.sub_description_intro {
  font-family: Outfit-light;
  font-size: 1.3rem;
  padding-top: 3rem;
  color: var(--persian-red);
  display: flex;
  align-self: flex-start;
}

.cakes_list_container {
  width: 100%;
  height: 100%;
  background-color: var(--persian-red);
  border-top: 2px solid var(--copper);
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

</style>
