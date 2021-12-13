export interface TodoInterface {
    id: number;
    text: string;
    isCompleted: boolean;
  };

export interface TodoFormInterface {
  createTodoList: (todo: TodoInterface) => void;
  todos: TodoInterface[];
};

export interface TodoListInterface {
  onRemoveTodoClick: (id: number) => void;
  todos: TodoInterface[];
};

export interface TodoItemInterface {
  onRemoveTodoClick: (id: number) => void;
  todo: TodoInterface;
};