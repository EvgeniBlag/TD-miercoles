import { TasksStateType } from "../App"
import { removeTaskAC, tasksReducer } from "./tasks-reduser";

test('correct task shuld de deleted from correct array', ()=>{
    const startState : TasksStateType = { 
     'todolistId1':[
        { id:'1', title:'css', isDone:false },
        { id:'2', title:'Js', isDone:true},
        { id:'3', title:'React', isDone:false},
     ],    
     'todolistId2': [
        { id:'1', title:'bread', isDone:false },
        { id:'2', title:'milk', isDone:true},
        { id:'3', title:'tea', isDone:false},
     ]   
};

const action = removeTaskAC('2','todolistId2');

const endState = tasksReducer(startState,action)

expect(endState).toEqual(
    { 
        'todolistId1':[
           { id:'1', title:'css', isDone:false },
           { id:'2', title:'Js', isDone:true},
           { id:'3', title:'React', isDone:false},
        ],    
        'todolistId2': [
           { id:'1', title:'bread', isDone:false },
           { id:'3', title:'tea', isDone:false},
        ]   
   });
});