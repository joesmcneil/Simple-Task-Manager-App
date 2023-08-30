<script setup lang="ts">
import InputField from './components/InputField.vue'
import TaskList from './components/TaskList.vue'
import ListFilters from './components/ListFilters.vue'
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
      <InputField :storedTasks="storedTasks"/>
    </div>
    <div class="filtersContainer">
      <ListFilters></ListFilters>
    </div>
    <div class="taskListContainer">
      <TaskList :storedTasks="storedTasks"/>
    </div>
  </div>
</template>

<style scoped>
</style>
