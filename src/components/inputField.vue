<script setup lang="ts">
import { ref } from 'vue';
import { Task } from '../App.vue';

// Registering props to this component
const props = defineProps<{
  storedTasks: Task[]
}>();

const retrieveFinalTaskId = () => {
  // Getting the savedTasks array as a JSON from localStorage
  const savedTasksJSON = localStorage.getItem('savedTasks');
  // If the JSON exists, parse it and assign it to a the savedTasks variable
  if (savedTasksJSON) {
    const savedTasks: Task[] = JSON.parse(savedTasksJSON);
    // If the parsed JSON contains 1 or more tasks, get the taskId of the last indexed item and return it
    if (savedTasks.length > 0) {
      const lastTaskId = savedTasks[savedTasks.length - 1].taskId;
      return lastTaskId;
      // In all other cases, return 0
    } else {
        return 0;
    }
  } else {
    return 0;
  }
}

// Setting a counter to keep track of taskIds being distributed
let taskIdCounter = ref<number>(retrieveFinalTaskId());

// Variables to hold the ref values for the input task field and for the stored tasks taken from props
const inputTask = ref<string>('');
const storedTasks = ref<Task[]>(props.storedTasks);

const addTask = () => {
  // Taking the Task interface from props to create a new object based on the user's inputted task
  const newTask: Task ={
    name: inputTask.value,
    completed: false,
    // Setting the counter of value + 1 means ids will always start on 1, which could be a mistake
    taskId: taskIdCounter.value + 1
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
