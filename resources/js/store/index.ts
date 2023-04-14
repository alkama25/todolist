import { defineStore } from "pinia";
import axios from "axios";
import { Todo, CreateTodoPayload, ApiResponse } from "../types";

interface State {
    todoListItems: Todo[];
}

export const useTodoListStore = defineStore("todoList", {
    state: (): State => ({ todoListItems: [] }),
    actions: {
        async createTodoItem(param: string): Promise<void> {
            try {
                const payload: CreateTodoPayload = { item: { name: param } };
                const response = await axios.post<ApiResponse<Todo>>(
                    "api/item/store",
                    payload
                );
                this.todoListItems.push(response.data);
            } catch (error) {
                console.error(error);
            }
        },
    },
});
