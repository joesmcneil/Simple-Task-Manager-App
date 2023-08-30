<script setup lang="ts">
import { ref } from 'vue';

const filterSet = (filter:string) => {
    const currentFilter = localStorage.getItem('filter');
    const setFilter = (filter === 'All' && filter !== currentFilter) || (filter === 'Complete' && filter !== currentFilter) || (filter === 'Incomplete' && filter!== currentFilter)
    ? filter
    : 'None';
  localStorage.setItem('filter', setFilter);
  console.log(setFilter);
};

</script>

<template>

<div class="filterList">
  <div class="allTasksCheckbox">
    <input type="checkbox" @click="filterSet('All')" name="All tasks" value="All tasks">
    <label for="All tasks">All tasks</label>
  </div>
  <div class="completeTasksCheckbox">
    <input type="checkbox" @click="filterSet('Complete')" name="Completed tasks">
    <label for="Completed tasks">Completed tasks</label>
  </div>
  <div class="incompleteTasksCheckbox" @click="filterSet('Incomplete')" name="Incomplete tasks">
    <input type="checkbox">
    <label for="Incomplete tasks">Incomplete tasks</label>
  </div>
</div>

</template>

<style scoped>

</style>