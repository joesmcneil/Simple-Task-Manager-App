<script setup lang="ts">
import { ref } from 'vue';

// Registering props to this component
const props = defineProps<{
  storedTasks: string[]
}>();

interface Task {
  name: string;
  complete: boolean;
}

// Variables to hold the ref values for the input task field and for the stored tasks taken from props
const inputTask = ref<string>('');
const storedTasks = ref<string[]>(props.storedTasks);

const addTask = () => {
  if (inputTask.value && inputTask.value.trim() !== '') {
    // If the input field is populated and does not have empty spaces, push the value to the storedTasks array
    storedTasks.value.push(inputTask.value);
    localStorage.setItem('savedTasks', JSON.stringify(storedTasks.value));
    // Clear the input field after submitting a new task
    inputTask.value = ''; 
  }
};

</script>

<template>
  <div>
  <input type="text" v-model="inputTask" class="taskInput">
  <button @click="addTask">Save to localStorage</button>
  </div>
</template>

<style scoped>

</style>
