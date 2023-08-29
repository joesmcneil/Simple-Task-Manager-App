<script setup lang="ts">
import { ref } from 'vue';
import { Task } from '../App.vue';

// Registering props to this component
const props = defineProps<{
  storedTasks: Task[]
}>();

// Setting a counter to keep track of taskIds being distributed
let taskIdCounter = ref<number>(0);

// Variables to hold the ref values for the input task field and for the stored tasks taken from props
const inputTask = ref<string>('');
const storedTasks = ref<Task[]>(props.storedTasks);

const addTask = () => {
  // Taking the Task interface established in App.vue to create a new object based on the user's inputted task
  const newTask: Task ={
    name: inputTask.value,
    completed: false,
    taskId: taskIdCounter.value
  }
  if (inputTask.value && inputTask.value.trim() !== '') {
    // If the input field is populated and does not have empty spaces, push the value to the storedTasks array
    storedTasks.value.push(newTask);
    localStorage.setItem('savedTasks', JSON.stringify(storedTasks.value));
    // Clear the input field after submitting a new task and incrementing the taskId counter to ensure unique task ids
    inputTask.value = '';
    taskIdCounter.value++;
  }
};

</script>

<template>
  <div class="taskInputContainer">
    <div class="textInputContainer">
      <input type="text" v-model="inputTask" class="taskInput" placeholder="Enter your task">
  </div>
    <div class="newTaskButtonContainer">
      <button @click="addTask">Add task</button>
  </div>
</div>
</template>

<style scoped>



</style>
