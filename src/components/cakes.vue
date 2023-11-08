<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const data = ref([]);
const itemsPerPage = ref(6);
const visibleData = computed(() => data.value.slice(0, itemsPerPage.value));

const verifyLocation = () => {
  if (window.location.pathname === '/') {
    return true;
  }
  return false;
};

const loadMore = () => {
  if (itemsPerPage.value <= data.value.length) {
    itemsPerPage.value += 6;
  }
};

const listSize = computed(() => {
  return itemsPerPage.value < data.value.length;
});

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const categoryToIcon = {
  CAKE: ['fas', 'cake'],
  BREAD: ['fas', 'bread-slice'],
  SANDWICH: ['fas', 'burger'],
  DESSERT: ['fas', 'stroopwafel'],
  SNACK: ['fas', 'cookie-bite'],
};

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
    <h1 class="title_cakes" v-if="verifyLocation()" >Destaques da semana</h1>
    <h1 class="title_cakes" v-if="!verifyLocation()" >Produtos Disponíveis</h1>
    <div class="box_show_cakes">
      <div class="cards_cakes" v-for="item in visibleData" :key="item.id">
        <div class="card">
          <div class="card_body_detail">
            <div class="card_body">
              <font-awesome-icon class="category_icon" :icon="categoryToIcon[item.type]" />
              <img :src="item.image" class="card_img_top" alt="..." />
              <div class="overlay"></div>
              <div class="card_info">
                <h5 class="card_title">{{ item.name }}</h5>
                <p class="card_text">{{ shortenedDescription[item.id - 1] }}</p>
                <p class="card_price">R$ {{ item.price }}</p>
              </div>
            </div>
            <font-awesome-icon class="arrow_card" :icon="['fas', 'arrow-right']" />
          </div>
        </div>
      </div>
    </div>
    <div class="container_show_more">
      <button class="button_show_more" v-if="listSize" @click="loadMore">Ver Mais</button>
      <font-awesome-icon @click="loadMore" v-if="listSize" class="arrow_show_more" :icon="['fas', 'arrow-down']" />
      <font-awesome-icon @click="backToTop" v-if="!listSize" class="arrow_show_more" :icon="['fas', 'arrow-up']" />
    </div>
  </div>
</template>
  
<style scoped>
.card_text {
  font-size: 1rem;
  color: var(--color-dark-one);
  font-family: Outfit-light;

}

.card_title {
  font-size: 1.5rem;
  color: var(--color-dark-one);
  font-family: Caveat-bold;
}

.category_icon {
  justify-self: end;
  position: absolute;
  font-size: 1.5rem;
  color: var(--hunyadi-yellow);
  background-color: var(--persian-red);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  padding: 1rem;
  border-radius: 100%;
  margin: 0.5rem;
}

.button_show_more {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 3rem;
  border-radius: 1rem;
  border: none;
  background-color: transparent;
  color: var(--color-white-one);
  font-size: 2rem;
  font-family: Caveat-bold;
  cursor: pointer;
  transition: 0.5s;
}

.arrow_show_more {
  font-size: 2rem;
  color: var(--copper);
  cursor: pointer;
  transition: 0.3s;
  animation: 1s ease-in-out 0s infinite normal none running down;
}

.container_show_more {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 1rem;
}

.overlay {
  width: 100%;
  height: 2rem;
  transform: translateY(-2rem);
  background: var(--color-white-three);
  background: linear-gradient(0deg, rgba(240, 240, 240, 1) 60%, rgba(255, 255, 255, 0) 100%);
}

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
  transition: 0.5s;
}

.card_body {
  display: flex;
  flex-direction: column;
  background-color: var(--color-white-three);
  border-radius: 1rem;
  border-bottom-right-radius: 50%;
  width: 20rem;
  height: 25rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.card_body_detail:hover {
  transform: scale(1.05);
  transition: 0.5s;
}

.card_img_top {
  width: 100%;
  height: 12rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
}

.card_info {
  padding: 0 1rem 0 1rem;
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

@keyframes down {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5px);
  }

  100% {
    transform: translateY(0);
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