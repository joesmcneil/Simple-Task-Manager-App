<script setup lang="ts">
import InputField from './components/inputField.vue'
import TaskList from './components/taskList.vue'
import { ref } from 'vue';

// Initialising the list of tasks already submitted using props
const storedTasks = ref<string[]>(JSON.parse(localStorage.getItem('savedTasks') || '[]'));

</script>

<template>
  <div>
  <header>
    <h1>
    Simple Task Manager App
    </h1>
  </header>
    <div class="inputContainer">
      <InputField :storedTasks="storedTasks"/>
    </div>
    <div class="taskList">
      <TaskList :storedTasks="storedTasks"/>
    </div>
  </div>
</template>

<style scoped>
</style>
