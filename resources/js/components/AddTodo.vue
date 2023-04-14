<template>
    <div class="mt-5 flex justify-between items-center pb-5 gap-x-3">
        <input
            class="rounded px-3 py-2 text-sm border border-gray-200 focus:border-gray-300 outline-none flex-1"
            placeholder="Add item"
            :value="todoText"
            @input="onInput"
        />
        <button
            class="bg-gray-700 border-gray-300 text-white cursor-pointer focus:outline-none border rounded font-medium px-3 py-2 text-sm disabled:bg-gray-500 disabled:border-0 disabled:cursor-default disabled:pointer-events-none"
            @click="addTodo"
            :disabled="isButtonDisabled"
        >
            Add item
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useTodoListStore } from "../store/index";

const todoText = ref<string>("");
const isButtonDisabled = computed<boolean>(() => !todoText.value.length);
const onInput = (event: Event) =>
    (todoText.value = (event.target as HTMLInputElement).value);

const addTodo = async () => {
    await useTodoListStore().createTodoItem(todoText.value);
    todoText.value = "";
};
</script>
