<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const data = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:8082/product");
    data.value = response.data;
  } catch (error) {
    console.error("Erro ao buscar dados da API: " + error);
  }
});

const shortenedDescription = computed(() => {
  return data.value.map(item => {
    if (item.description.length > 50) {
      return item.description.slice(0, 50) + '...';
    }
    return item.description;
  });
});


</script>

<template>
  <div class="container_cakes">
    <h1 class="title_cakes">Destaques da semana</h1>
    <div class="box_show_cakes">
      <div class="cards_cakes" v-for="item in data" :key="item.id">
        <div class="card">
          <div class="card_body_detail">
            <div class="card_body">
              <img :src="item.image" class="card_img_top" alt="..." />
              <div class="card_info">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">{{ shortenedDescription[item.id] }}</p>
                <p class="card_price">R$ {{ item.price }}</p>
              </div>
            </div>
            <font-awesome-icon class="arrow_card" :icon="['fas', 'arrow-right']" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped>

.card_price {
  font-size: 2rem;
  color: var(--color-dark-one);
  font-family: Caveat-bold;
}

.arrow_card {
  position: absolute;
  font-size: 2rem;
  color: var(--color-dark-one);
  margin: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

.arrow_card:hover {
  color: var(--persian-red);
  transition: 0.5s;
  transform: scale(1.1);
  animation: 1s ease-in-out 0s infinite normal none running bounce;
}

.card_body_detail {
  display: flex;
  align-items: flex-end;
  justify-content: end;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-color: var(--arylide-yellow);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.card_body {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white-three);
  border-radius: 1rem;
  border-bottom-right-radius: 50%;
  width: 20rem;
  height: 25rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

}

.card_img_top {
  width: 100%;
  height: 50%;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
}

.card_info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.cards_cakes {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box_show_cakes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.container_cakes {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;
  width: 100%;
  height: 100%;
}

.title_cakes {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  font-size: 3rem;
  border-left: 5px solid var(--copper);
  padding-left: 1rem;
  color: var(--color-white-three);
  margin: 1rem;
  font-family: Caveat-bold;
}

@keyframes bounce {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .box_show_cakes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}

</style>