<script setup lang="ts">
import { ref } from 'vue';

const inputTask = ref<string>('');
const storedTasks = ref<string[]>(JSON.parse(localStorage.getItem('savedTasks') || '[]'));

const saveText = () => {
  if (inputTask.value) {
    // If the input field is populated, push the value to the storedTasks arr.
    storedTasks.value.push(inputTask.value);
    localStorage.setItem('savedTasks', JSON.stringify(storedTasks.value));
    inputTask.value = ''; // Clear the input field.
  }
};

</script>

<template>
  <div>
  <input type="text" v-model="inputTask" class="taskInput">
  <button @click="saveText">Save to localStorage</button>
  <p>Stored tasks: {{ storedTasks }} </p>
  <ul>
    <li v-for="(text, index) in storedTasks" :key="index">{{ text }}</li>
  </ul>
  </div>
</template>

<style scoped>

</style>
