<script setup lang="ts">
import { ref, computed, onMounted, watchEffect } from 'vue';
import { Task } from '../App.vue';

// Registering props to this component
const props = defineProps<{
  storedTasks: Task[]
}>();

const filterStatus = ref(localStorage.getItem('filterStatus') || 'All');

// Initialising the list of tasks already submitted using props
const storedTasks = ref<Task[]>(props.storedTasks);

const filteredTasks = computed(() => {
  if (filterStatus.value === 'All') {
    return storedTasks.value;
  } else {
    const status = filterStatus.value === 'Complete';
    return storedTasks.value.filter(task => task.completed === status);
  }
});

const removeTask = (index:number) => {
  // Removing the task by finding the object on click and removing it from the storedTasks array of objects
  storedTasks.value.splice(index, 1);
  // Updating localStorage to the modified array value
  localStorage.setItem("savedTasks", JSON.stringify(storedTasks.value));
}

const completeToggle = (taskId: number) => {
  const task = storedTasks.value.find(task => task.taskId === taskId);
  if (task) {
    task.completed = !task.completed;
    localStorage.setItem("savedTasks", JSON.stringify(storedTasks.value));
  }
};

watchEffect(() => {
  console.log('filterStatus changed:', filterStatus.value);
});

</script>

<template>
  <div>
  <ul>
    <li v-for="(task, index) in filteredTasks" :key="index" :class="{ taskItemActive: true, completedTask: task.completed }" :id:number="task.taskId">
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