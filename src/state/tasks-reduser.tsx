import { FilterValuesType, TasksStateType, TodolistType } from "../App";
import { v1 } from "uuid";
import { TaskType } from "../Todolist";
import { AddTodolistActionType } from "./todolists-reducer";

let todolistId1 = v1();
let todolistId2 = v1();

export type RemoveTaskType = ReturnType<typeof removeTaskAC>;

export type AddTaskType = ReturnType<typeof addTaskAC>;

export type ChangeStatusType = ReturnType<typeof changeStatusAC>;

export type ChangeTaskTitleType = ReturnType<typeof changeTaskTitleAC>;



type ActionsType =
  | RemoveTaskType
  | AddTaskType
  | ChangeStatusType
  | ChangeTaskTitleType
  | AddTodolistActionType;



export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {

  switch (action.type) {

    case "REMOVE-TASK":
      return {
        ...state,
        [action.todolistId]: state[action.todolistId].filter((task) => task.id !== action.taskId),
      };


    case "ADD-TASK":
      let task: TaskType = { id: v1(), title: action.title, isDone: false };
      return { ...state, [action.todolistId]: [task, ...state[action.todolistId]] };


    case "CHANGE-STATUS": 
       return{ ...state,[action.todolistId]:state[action.todolistId] 
        .map(t=>t.id===action.id?{...t,isDone:action.isDone}:t)
    }


    case "CHANGE-TASK-TITLE":
     return {
       ...state,
       [action.todolistId]: state[action.todolistId].map((t) =>
         t.id === action.id ? { ...t, title: action.newTitle } : t
       ),
     }

     case "ADD-TODOLIST":
     return {
      ...state,[action.todolistId]:[]
     }

    default:
      return state;
  }
};

export const removeTaskAC = (taskId: string, todolistId: string) => {
  return {
    type: "REMOVE-TASK",
    taskId: taskId,
    todolistId: todolistId,
  } as const;
};

export const addTaskAC = (title: string, todolistId: string) => {
  return {
    type: "ADD-TASK",
    title: title,
    todolistId: todolistId,
  } as const;
};

export const changeStatusAC = (id: string, isDone: boolean, todolistId: string) => {
  return {
    type: "CHANGE-STATUS",
    id: id,
    isDone: isDone,
    todolistId: todolistId,
  } as const;
};

export const changeTaskTitleAC = (id: string, newTitle: string, todolistId: string) => {
  return {
    type: "CHANGE-TASK-TITLE",
    id: id,
    newTitle: newTitle,
    todolistId: todolistId,
  } as const;
};


