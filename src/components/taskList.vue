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
}

</script>

<template>
  <div>
    <ul>
    <li v-for="(task, index) in storedTasks" :key="index" class="taskItemActive" :id:number=task.taskId>{{ task.name  }}
      <input type="checkbox" v-model="task.completed" class="taskCompleteCheckbox">
      <button @click="removeTask(index)" class="removeTaskButton"></button>
    </li>
   </ul>
  </div>
</template>

<style scoped>



</style>