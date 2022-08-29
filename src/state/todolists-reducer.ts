import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';

export type ActionType = {
    type: 'FIRST-ACTION-TYPE'
  
}
export type ActionType = {
    type: 'SECOND-ACTION-TYPE'
   
}


type ActionsType =  |FIRST-ACTION-TYPE  |SECOND-ACTION-TYPE ;

export const tasksReducer = (state:  TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {

        case '':
            return state

        case '':
            return state

      
        default:
           return state
    }
}

export const FirstAC = (todolistId: string): FirstActionType => {
    return { type: ''}
}
export const SecondAC = (title: string): SecondActionType => {
    return { type: ''}
}

