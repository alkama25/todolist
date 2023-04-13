<template>
    <main class="flex flex-col justify-between m-4 sm:m-0">
        <AddTodo></AddTodo>
        <CompletedListItems></CompletedListItems>
        <PendingListItems></PendingListItems>
    </main>
</template>

<script setup lang="ts">
import CompletedListItems from "@/components/CompletedListItems.vue";
import PendingListItems from "@/components/PendingListItems.vue";
import AddTodo from "@/components/AddTodo.vue";
</script>
