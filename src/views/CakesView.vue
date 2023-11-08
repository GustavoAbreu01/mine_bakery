<script setup lang="ts">
import Cake from '../components/Cakes.vue'

</script>

<template lang="">
    <div class="container_cakes_view">
        <div class="container_filter">
            <div class="category_filter">
                <font-awesome-icon class="category_icons" :icon="['fas', 'cake']" />
                <font-awesome-icon class="category_icons" :icon="['fas', 'bread-slice']" />
                <font-awesome-icon class="category_icons" :icon="['fas', 'burger']" />
                <font-awesome-icon class="category_icons" :icon="['fas', 'stroopwafel']" />
                <font-awesome-icon class="category_icons" :icon="['fas', 'cookie-bite']" />
            </div>
            <div class="slider_range">
                <p class="text_price">Valor: </p>
                <input type="range" min="0" max="100" value="50" class="slider" id="myRange" />
            </div>
        </div>
        <Cake />
    </div>
</template>

<style scoped>
.text_price {
    font-size: 1.5rem;
    color: var(--color-dark-two);
    font-family: Caveat-bold;
}

.slider_range {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 2rem;

}

input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    border-radius: 16px;
}

input[type="range"]::-webkit-slider-runnable-track {
    height: 15px;
    background: #ccc;
    border-radius: 16px;
}

input[type="range"]::-moz-range-track {
    height: 15px;
    background: var(--color-white-two);
    border-radius: 16px;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 15px;
    width: 15px;
    background-color: var(--arylide-yellow);
    border-radius: 50%;
    border: 2px solid var(--copper);
    box-shadow: -407px 0 0 400px var(--copper);
}

.slider {
    width: 100%;
    height: 1rem;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
}

.category_icons {
    font-size: 2rem;
    margin: 0 1rem;
    color: var(--color-dark-two);
    background-color: var(--copper);
    border: 2px dashed var(--arylide-yellow);
    border-radius: 100%;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.5s;
}

.category_icons:hover {
    background-color: var(--arylide-yellow);
    border: 2px dashed var(--copper);
    transition: 0.5s;
    transform: scale(1.1);
}

.container_filter {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: var(--color-white-two);
    width: 60%;
    height: 5rem;
    margin-top: 2rem;
    margin-left: 2rem;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}

.container_cakes_view {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-top: 5rem;
    background-color: var(--persian-red);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75) inset;
}
</style>