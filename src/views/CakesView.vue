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
            <div>
                <p>Price: </p>
            </div>
        </div>
        <Cake />
    </div>
</template>

<style scoped>

.category_icons {
    font-size: 2rem;
    margin: 0 1rem;
    background-color: var(--copper);
    border-radius: 100%;
    padding: 0.5rem;
}

.container_filter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-white-two);
    width: 80%;
    height: 5rem;
    margin-top: 2rem;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}

.container_cakes_view {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 5rem;
    background-color: var(--persian-red);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75) inset;
}
</style>