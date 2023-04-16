## to-do-list

Simple to-do-list application that allows user to add tasks, mark them as complete, or delete them.
This application uses - <br>
<b> Backend </b> <br> 1. Laravel Framework 8 <br> 2. PHP - 7<br> 3. mysql - 8<br>
<b> Frontend </b> <br> 1. Vue 3 <br> 2. Tailwind CSS<br> 3. TypeScript<br> 4. Pinia<br>

## Description

This application uses - <br> 1. GET api - to list all the todo items <br> 2. POST api - to add a new todo item<br> 3. PUT api - to update the todo item (to mark it as complete)<br> 2. DELETE api - to delete a todo item<br>

Pinia is used as a state management library to handle the todo items in different sections.

Tailwind CSS is used to create the layout and some custom configurations are defined in tailwind.config.js.

TypeScript and vue composition API is used for creating the components.

Common types are stored in separate files.

Each todo is created with a text, unique ID, completed status and created date.

Transition property of Vue is used to provide transition animations while adding, deleting or moving a todo item.
