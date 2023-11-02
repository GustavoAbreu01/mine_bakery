<template>
    <div>
      <h1>Exemplo de Consumo de API</h1>
      <ul>
        <li v-for="item in data" :key="item.id">{{ item.title }}</li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const data = ref([]);
  
  onMounted(async () => {
    try {
      const response = await axios.get("https://sua-api.com/endpoint");
      data.value = response.data;
    } catch (error) {
      console.error("Erro ao buscar dados da API: " + error);
    }
  });
  </script>
  </template>