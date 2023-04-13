<template>
    <div class="mt-5">
        <input
            class="w-full rounded px-3 py-2 text-base border border-gray-200 focus:border-gray-300 outline-none"
            placeholder="Add task"
            :value="todoText"
        />
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const todoText = ref<string>('')
</script>
