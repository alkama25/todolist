export interface Todo {
    id: number;
    name: string;
    completed: number;
    completed_at?: string | null;
    created_at: string;
    updated_at: string;
}

export interface ApiResponse<T> {
    data: T;
}

export type CreateTodoPayload = Record<string,  Pick<Todo, 'name'> >;

export type UpdateTodo = Record<string,  Pick<Todo, 'completed'> >;