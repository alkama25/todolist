<template>
    <section v-if="completedList.length">
        <TodoItem v-for="item in completedList" :key="item.id" :listItem="item"></TodoItem>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TodoItem from "../components/TodoItem.vue";
import { useTodoListStore } from '../store/index'
import { Todo } from "../types";

const listItems = useTodoListStore().todoListItems

const completedList = computed<Todo[]>(() => listItems.length
  ? listItems.filter((todo: Todo) => todo.completed === 1)
  : []
);
</script>