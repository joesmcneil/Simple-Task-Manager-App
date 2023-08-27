<script setup lang="ts">
import InputField from './components/inputField.vue'
import TaskList from './components/taskList.vue'
</script>

<template>
  <div>
  <header>
    <h1>
    Simple Task Manager App
    </h1>
  </header>
    <div class="inputContainer">
      <InputField/>
    </div>
    <div class="taskList">
    </div>
  </div>
</template>

<style scoped>
</style>
