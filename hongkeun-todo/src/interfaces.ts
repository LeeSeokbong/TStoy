export interface TodoInterface {
    id: number;
    text: string;
    isCompleted: boolean;
  };

export interface TodoFormInterface {
  todos: TodoInterface[];
};

export interface TodoListInterface {
  todos: TodoInterface[];
};

export interface TodoItemInterface {
  todo: TodoInterface;
};