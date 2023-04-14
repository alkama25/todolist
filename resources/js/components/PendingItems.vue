<template>
    <section v-if="pendingList.length">
        <CustomTransition>
            <TodoItem
                v-for="item in pendingList"
                :key="item.id"
                :listItem="item"
            ></TodoItem>
        </CustomTransition>
    </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import TodoItem from "../components/TodoItem.vue";
import CustomTransition from "../components/CustomTransition.vue";
import { useTodoListStore } from "../store/index";
import { Todo } from "../types";

const listItems = useTodoListStore().todoListItems;

const pendingList = computed<Todo[]>(() =>
    useTodoListStore().todoListItems.length
        ? useTodoListStore().todoListItems.filter(
              (todo: Todo) => todo.completed === 0
          )
        : []
);
</script>
