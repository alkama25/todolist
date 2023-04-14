<template>
    <main>
        <div class="flex justify-center mt-10">
            <h1 class="text-2xl font-bold text-black">Todo List</h1>
        </div>
        <ListItems></ListItems>
    </main>
</template>

<script setup lang="ts">
import ListItems from "./views/ListItems.vue";
</script>
