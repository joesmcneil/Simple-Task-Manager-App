<script setup lang="ts">
import { watchEffect } from 'vue';

const filterSet = (filter:string) => {
    const currentFilter = localStorage.getItem('filterStatus');
    const setFilter = (filter === 'All' && filter !== currentFilter) || (filter === 'Complete' && filter !== currentFilter) || (filter === 'Incomplete' && filter!== currentFilter)
    ? filter
    : 'None';
  localStorage.setItem('filterStatus', setFilter);
  console.log(setFilter);

  watchEffect(() => {
  console.log('filterStatus changed:', setFilter);
  window.location.reload();
});
(console.log('test'))
};

</script>

<template>

<div class="filterList">
  <div class="allTasksCheckbox">
    <input type="checkbox" @click="filterSet('All')" name="All tasks" value="All tasks">
    <label for="allTasks">All tasks</label>
  </div>
  <div class="completeTasksCheckbox">
    <input type="checkbox" @click="filterSet('Complete')" name="Completed tasks">
    <label for="completedTasks">Completed tasks</label>
  </div>
  <div class="incompleteTasksCheckbox" @click="filterSet('Incomplete')" name="Incomplete tasks">
    <input type="checkbox">
    <label for="incompleteTasks">Incomplete tasks</label>
  </div>
</div>

</template>

<style scoped>

</style>