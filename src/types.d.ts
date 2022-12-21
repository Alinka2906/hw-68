export interface Task {
  id: string;
  name: string;
  }

export type ApiTask = Omit<Task, 'id'>;

export interface TaskMutation {
  id: number;
  name: string;
}

export interface ApiTasksList {
  [id: string]: ApiTask;
}

export interface  TasksItem {
  name: string;
  isDone: boolean;
}