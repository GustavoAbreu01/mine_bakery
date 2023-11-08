<script setup lang="ts">
import { ref } from 'vue';
import logo from '@/assets/logo.svg';

const modalTransform = ref('translateX(110%)');

const toggleModal = () => {
    modalTransform.value = 'translateX(0)';
};

const closeModal = () => {
    modalTransform.value = 'translateX(110%)';
};
</script>

<template lang="">
    <div class="container_header">
        <RouterLink class="header_itens" to="/">
            <img class="logo_header" :src="logo" alt="Vue 3 + Vite" />
            <p class="title_header">Mine Bakery</p>
        </RouterLink>
        <div>
            <font-awesome-icon @click="toggleModal" class="bars_header" :icon="['fas', 'bars-staggered']" style="color: #cc3b3b;" />
        </div>
        <div class="modal" :style="{ transform: modalTransform }">
         <font-awesome-icon @click="closeModal" class="close_menu" :icon="['fas', 'xmark']" style="color: #E8E8E8;" />
            <div class="modal_itens">
              <RouterLink class="menu_link" to="/">Home</RouterLink>
              <RouterLink class="menu_link" to="/cakes">Cakes</RouterLink>
              <RouterLink class="menu_link" to="/about">About</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

.container_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-white-two);
    position: fixed;
    padding: 1rem;
    width: 100%;
    height: 5rem;
    z-index: 1;
    top: 0;
    left: 0;
}

.logo_header {
    width: 5rem;
    height: 5rem;
}

.header_itens {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--color-dark-one);
    font-family: Outfit-light;
    text-decoration: none;
}

.bars_header {
    font-size: 2rem;
    color: var(--color-dark-one);
    font-family: Outfit-light;
}

.bars_header:hover {
    cursor: pointer;
}

.modal {
    position: absolute;
    top: 0;
    right: 0;
    width: 10rem;
    height: 20rem;
    background: var(--persian-red);
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: 50px;
    transition: 1s;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

}

.close_menu {
    font-size: 2.5rem;
    color: var(--color-dark-one);
    font-family: Outfit-light;
    z-index: 2;
    align-self: flex-end;
    cursor: pointer;
    padding: 1rem;
}

.modal_itens {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 70%;
    z-index: 10;
    color: var(--color-white-two);
}

.menu_link {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--color-white-two);
    font-family: Outfit-light;
    text-decoration: none;
    transition: 0.5s;
}

.menu_link:hover {
    scale: 1.1;
    text-shadow: 0 0 10px var(--color-white-two);
    transition: 0.5s;
}
</style>