<script setup lang="ts">
import inputField from './components/inputField.vue'
import taskList from './components/taskList.vue'
import { ref } from 'vue';

// Exporting an interface so an array of objects containing different data types can be implemented across components
export interface Task {
  name: string;
  completed: boolean;
  taskId: number;
}

// Storing the already submitted tasks in the main App.vue file to ensure accessibility across different components
const storedTasks = ref<Task[]>(JSON.parse(localStorage.getItem('savedTasks') || '[]'));

</script>

<template>
  <div class="mainContainer">
  <header>
    <h1>
    Simple Task Manager
    </h1>
  </header>
    <div class="inputContainer">
      <inputField :storedTasks="storedTasks"/>
    </div>
    <div class="taskListContainer">
      <taskList :storedTasks="storedTasks"/>
    </div>
  </div>
</template>

<style scoped>
</style>
