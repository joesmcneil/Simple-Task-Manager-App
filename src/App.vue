<script setup lang="ts">
import InputField from './components/InputField.vue'
import TaskList from './components/TaskList.vue'
import { ref } from 'vue';

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
    <div class="taskListContainer">
      <TaskList :storedTasks="storedTasks"/>
    </div>
  </div>
</template>

<style scoped>
</style>
