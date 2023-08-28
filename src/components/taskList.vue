<script setup lang="ts">
import { ref } from 'vue';
import { Task } from '../App.vue';

// Registering props to this component
const props = defineProps<{
  storedTasks: Task[]
}>();

// Initialising the list of tasks already submitted using props
const storedTasks = ref<Task[]>(props.storedTasks);
console.log(storedTasks);

const removeTask = (index:number) => {
  storedTasks.value.splice(index, 1);
  localStorage.setItem("savedTasks", JSON.stringify(storedTasks.value));
  console.log(index);
  console.log(localStorage.savedTasks);
}

</script>

<template>
  <div>
   <p>Stored tasks: {{ storedTasks }} </p>
    <ul>
    <li v-for="(task, index) in storedTasks" :key="index" :id:number=task.taskId>{{ task.name  }}
      <input type="checkbox" v-model="task.completed">
      <button @click="removeTask(index)"></button>
    </li>
   </ul>
  </div>
</template>

<style scoped>

</style>