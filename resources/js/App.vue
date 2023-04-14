<template>
    <main class="pb-20">
        <div class="flex justify-center mt-10">
            <h1 class="text-2xl font-bold text-black">Todo List</h1>
        </div>
        <ListItems></ListItems>
    </main>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import ListItems from "./views/ListItems.vue";
import { useTodoListStore } from "./store/index";

onBeforeMount(async () => {
   await useTodoListStore().getTodoList()
})
</script>
