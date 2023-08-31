<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Task } from '../App.vue';

// Registering props to this component
const props = defineProps<{
  storedTasks: Task[],
}>();

// Getting the filter status set in local storage
const selectedFilter = ref(localStorage.getItem('filterStatus') || 'None');

// Setting the filter based on it's current filter status
const filterSet = (filter:string) => {
    const currentFilter = localStorage.getItem('filterStatus');
    // Checking if the filter matches the currently set filter and if it matches any of the set statuses. If true, set the new filter status.
    const setFilter = (filter === 'All' && filter !== currentFilter) || (filter === 'Complete' && filter !== currentFilter) || (filter === 'Incomplete' && filter!== currentFilter)
    ? filter
    : 'None';
  localStorage.setItem('filterStatus', setFilter);
};

// Initialising the list of tasks already submitted using props
const storedTasks = ref<Task[]>(props.storedTasks);

// Generating css classes dynamically based on the selected filter
const taskClasses = computed(() => {
  return (task: Task) => {
    return {
      taskItem: true,
      completedTask: task.completed,
      incompleteTask: !task.completed,
      // Assign the hideTask class to hide the list items whose 'completed' status does not match the currently selected filter
      hideTask: (selectedFilter.value === 'Complete' && !task.completed) ||
                (selectedFilter.value === 'Incomplete' && task.completed)
    };
  };
});

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
    <div class="filtersContainer">
    <div class="filterList">
      <div class="allTasksRadioButton">
        <input type="radio" @click="filterSet('All')" name="taskFilter" value="All" v-model="selectedFilter">
        <label for="allTasks">All tasks</label>
      </div>
      <div class="completeTasksRadioButton">
        <input type="radio" @click="filterSet('Complete')" name="taskFilter" value="Complete" v-model="selectedFilter">
        <label for="completedTasks">Completed tasks</label>
      </div>
      <div class="incompleteTasksRadioButton">
        <input type="radio" @click="filterSet('Incomplete')" name="taskFilter" value="Incomplete" v-model="selectedFilter">
        <label for="incompleteTasks">Incomplete tasks</label>
      </div>
      </div>
    </div>
  <ul>
    <li v-for="(task, index) in storedTasks" :key="index"
          :class="taskClasses(task)">
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