<template>
    <section v-if="pendingList.length">
        <TodoItem v-for="item in pendingList" :key="item.id" :listItem="item"></TodoItem>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TodoItem from "../components/TodoItem.vue";
import { useTodoListStore } from '../store/index'
import { Todo } from "../types";

const listItems = useTodoListStore().todoListItems

const pendingList = computed<Todo[]>(() => listItems.length
  ? listItems.filter((todo: Todo) => todo.completed === 0)
  : []
);
</script>
