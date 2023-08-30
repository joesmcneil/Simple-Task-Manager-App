# Simple-Task-Manager-App

## Introduction

Simple Task Manager app is a web application that allows users to manage their tasks my adding them, marking them as complete and removing them.

## Setup and startup

Run the `npm install` command to install all necessary packages.

Run `npm run dev` to start the web application, which should be accessible on localhost using: http://127.0.0.1:5173/

### Requirements

1. **Add Task**

- [x] The user can type in an input field to enter a task
- [x] The user can submit a task via a button
- [x] The user cannot submit empty tasks

2. **List of Tasks**

- [x] Display a list of tasks below the input field
- Each task should have:
- [x] A checkbox to mark the task as complete
- [x] A delete button to remove the task from the list
- [x] Tasks that are marked as complete should have a visual indication

3. **Storage**

- [x] The user can store the tasks in localStorage

4. **Styling**

- [x] The application is presentable

### Bonus tasks

1. **Filter Tasks**

- Add buttons or toggles to filter tasks by:
    - [x] All tasks
    - [x] Incomplete tasks
    - [x] Completed tasks

2. **Unit Tests:**

- Write unit tests for the main components using Vue's testing utilities.
  - [] Complete? Y/N

### Known issues

- There is zero support / catering for different screen sizes or mobile
- The CSS is implemented on a global stylesheet instead of being scoped to Vue 3 components
- The Filters sort correctly when clicked. However, removing or toggling list items as 'complete' or 'incomplete' results in weird behaviours, such as:
    - The wrong list items being removed
    - The wrong list items being deleted
    - List items that were previously toggled as 'complete' or 'incomplete' and were removed from the list reappear when toggling a different list item..
    - List items that were previously deleted coming back from the dead and reappearing in local storage
    - The filter tickboxes do not stay ticked upon page refresh, resulting in 'reverse' filtering
