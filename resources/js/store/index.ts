import { defineStore } from "pinia";
import { apiRequest } from "../services/apiService";
import { Todo, CreateTodoPayload, UpdateTodo } from "../types";

interface State {
    todoListItems: Todo[];
}

export const useTodoListStore = defineStore("todoList", {
    state: (): State => ({ todoListItems: [] }),
    actions: {
        async getTodoList(): Promise<void> {
            const response = await apiRequest<Todo>({
                method: "get",
                url: "api/items",
            });
            console.log(":::",response)
            this.todoListItems = response.data
        },
        async createTodoItem(param: string): Promise<void> {
            const payload: CreateTodoPayload = { item: { name: param } };
            const response = await apiRequest<Todo>({
                method: "post",
                url: "api/item/store",
                data: payload,
            });
            this.todoListItems.push(response.data);
        },
        async markAsComplete(param: number, id: number): Promise<void> {
            const payload: UpdateTodo = { item: { completed: param } };
            const response = await apiRequest<Todo>({
                method: "put",
                url: `api/item/${id}`,
                data: payload,
            });
            const todoToUpdate = this.todoListItems.find(
                (todo) => todo.id === id
            );
            if (todoToUpdate) Object.assign(todoToUpdate, { ...response.data });
        },
        async deleteTodo(id: number): Promise<void> {
            const response = await apiRequest<Todo>({
                method: "delete",
                url: `api/item/${id}`,
            });
            const index = this.todoListItems.findIndex(
                (todo) => todo.id === id
            );
            if (index !== -1) this.todoListItems.splice(index, 1);
        },
    },
});
