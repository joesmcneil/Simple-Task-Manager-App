<script setup lang="ts">
import { ref } from 'vue';
import { Task } from '../App.vue';

// Registering props to this component
const props = defineProps<{
  storedTasks: Task[]
}>();

// Initialising the list of tasks already submitted using props
const storedTasks = ref<Task[]>(props.storedTasks);

const removeTask = (index:number) => {
  // Removing the task by finding the object on click and removing it from the storedTasks array of objects
  storedTasks.value.splice(index, 1);
  // Updating localStorage to the new arr
  localStorage.setItem("savedTasks", JSON.stringify(storedTasks.value));
}

const completeToggle = (index:number) => {
  let taskAtIndex = storedTasks.value[index];
  // Locating the object based on the index taken from the click and setting it to complete = true if it is already false
  if (taskAtIndex.completed === false) {
    taskAtIndex.completed = true;
  } else {
  // If the task is set to true already, set to false
    taskAtIndex.completed = false;
  }
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
        <button @click="removeTask(index)" class="removeTaskButton">X</button>
        </div>
      </div>
    </li>
  </ul>
  </div>
</template>

<style scoped>

</style>