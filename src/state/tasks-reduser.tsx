import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';

export type RemoveTaskType = {
    type: 'REMOVE-TASK'
    todolistId: string
    taskId:string
    
}
// export type SecondActionType = {
//     type: ''
  
// }


 type ActionsType = RemoveTaskType 

export const tasksReducer = (state: TasksStateType, action: ActionsType):TasksStateType => {
    switch (action.type) {

        case 'REMOVE-TASK':
          
            return {...state,[action.todolistId]:state[action.todolistId].filter( task => task.id !== action.taskId)}

        // case '':
        //     return state

     
        default:
           return state
    }
}

export const removeTaskAC = ( taskId: string, todolistId:string ) => {
    return {
         type: 'REMOVE-TASK',
         taskId:taskId,
         todolistId:todolistId
        } as const
}

// export const SecondAC = (title: string): SecondActionType => {
//     return { type: ''}
// }
