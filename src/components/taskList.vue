<script setup lang="ts">
import { ref } from 'vue';
import type { Task } from '../App.vue';

// Registering props to this component
const props = defineProps<{
  storedTasks: Task[]
}>();

// Initialising the list of tasks already submitted using props
const storedTasks = ref<Task[]>(props.storedTasks);

const removeTask = (index:number) => {
  // Removing the task by finding the object on click and removing it from the storedTasks array of objects
  storedTasks.value.splice(index, 1);
  // Updating localStorage to the modified array value
  localStorage.setItem("savedTasks", JSON.stringify(storedTasks.value));
}

const completeToggle = (index:number) => {
  let taskAtIndex = storedTasks.value[index];
  // Locating the object based on the index taken from the click and setting it to complete = true if it is already false
  taskAtIndex.completed = !taskAtIndex.completed;
  storedTasks.value.splice(index, 1, taskAtIndex);
  // Updating localStorage with the updated storedTasks array
  localStorage.setItem("savedTasks", JSON.stringify(storedTasks.value));
};

</script>

<template>
  <div>

  <ul>
    <li v-for="(task, index) in storedTasks" :key="index" :class="{ taskItemActive: true, completedTask: task.completed }" :id:number="task.taskId">
      <div class="taskContent">
        {{ task.name }}
        <div class="listButtons">
        <input type="checkbox" @click="completeToggle(index)" v-model="task.completed" class="taskCompleteCheckbox">
        <button @click="removeTask(index)" class="removeTaskButton">
          <img :src="'/Cross.svg'" alt="Delete button" width="20">
        </button>
        </div>
      </div>
      <hr>
    </li>
  </ul>
  </div>
</template>

<style scoped>

</style>