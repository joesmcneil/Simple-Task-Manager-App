<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  storedTasks: string[]
}>();

// Initialising the list of tasks already submitted using props
const storedTasks = ref<string[]>(props.storedTasks);
console.log(storedTasks);
</script>

<template>
  <div>
   <p>Stored tasks: {{ storedTasks }} </p>
    <ul>
    <li v-for="(text, index) in storedTasks" :key="index">{{ text }}</li>
   </ul>
  </div>
</template>

<style scoped>

</style>