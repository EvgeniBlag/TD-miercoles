import { TasksStateType } from "../App"
import { removeTaskAC, tasksReducer,addTaskAC, changeStatusAC, changeTaskTitleAC } from "./tasks-reduser";
import { AddTodolistAC, RemoveTodolistAC } from "./todolists-reducer";

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

test('correct task should be added to correct array', () => {
   const startState: TasksStateType = {
       "todolistId1": [
           { id: "1", title: "CSS", isDone: false },
           { id: "2", title: "JS", isDone: true },
           { id: "3", title: "React", isDone: false }
       ],
       "todolistId2": [
           { id: "1", title: "bread", isDone: false },
           { id: "2", title: "milk", isDone: true },
           { id: "3", title: "tea", isDone: false }
       ]
   };

   const action = addTaskAC("juce", "todolistId2");

   const endState = tasksReducer(startState, action)

   expect(endState["todolistId1"].length).toBe(3);
   expect(endState["todolistId2"].length).toBe(4);
   expect(endState["todolistId2"][0].id).toBeDefined();
   expect(endState["todolistId2"][0].title).toBe('juce');
   expect(endState["todolistId2"][0].isDone).toBe(false);
})

test('correct task change status', () => {
   const startState: TasksStateType = {
       "todolistId1": [
           { id: "1", title: "CSS", isDone: false },
           { id: "2", title: "JS", isDone: true },
           { id: "3", title: "React", isDone: false }
       ],
       "todolistId2": [
           { id: "1", title: "bread", isDone: false },
           { id: "2", title: "milk", isDone: true },
           { id: "3", title: "tea", isDone: false }
       ]
   };


   const action = changeStatusAC("3", true,"todolistId2");

   const endState = tasksReducer(startState, action)

   expect(endState["todolistId1"].length).toBe(3);
   expect(endState["todolistId2"].length).toBe(3);
   expect(endState["todolistId2"][0].id).toBeDefined();
   expect(endState["todolistId2"][2].title).toBe('tea');
   expect(endState["todolistId2"][2].isDone).toBe(true);
})

test('correct task change title', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            { id: "1", title: "CSS", isDone: false },
            { id: "2", title: "JS", isDone: true },
            { id: "3", title: "React", isDone: false }
        ],
        "todolistId2": [
            { id: "1", title: "bread", isDone: false },
            { id: "2", title: "milk", isDone: true },
            { id: "3", title: "tea", isDone: false }
        ]
    };
 
 
    const action = changeTaskTitleAC ("3", 'EvgenyBlagodarnyy',"todolistId2");
 
    const endState = tasksReducer(startState, action)
 
    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(3);
    expect(endState["todolistId2"][0].id).toBeDefined();
    expect(endState["todolistId2"][2].title).toBe('EvgenyBlagodarnyy');
    expect(endState["todolistId1"][2].title).toBe('React');
})

test('new array should be added when new todolist is added', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            { id: "1", title: "CSS", isDone: false },
            { id: "2", title: "JS", isDone: true },
            { id: "3", title: "React", isDone: false }
        ],
        "todolistId2": [
            { id: "1", title: "bread", isDone: false },
            { id: "2", title: "milk", isDone: true },
            { id: "3", title: "tea", isDone: false }
        ]
    };
 
    const action = AddTodolistAC("new todolist");
 
    const endState = tasksReducer(startState, action)
 
 
    const keys = Object.keys(endState);
    
    const newKey = keys.find(k => k != "todolistId1" && k != "todolistId2");
    if (!newKey) {
        throw Error("new key should be added")
    }
 
    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);
 });
 
test('property with todolistId should be deleted', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            { id: "1", title: "CSS", isDone: false },
            { id: "2", title: "JS", isDone: true },
            { id: "3", title: "React", isDone: false }
        ],
        "todolistId2": [
            { id: "1", title: "bread", isDone: false },
            { id: "2", title: "milk", isDone: true },
            { id: "3", title: "tea", isDone: false }
        ]
    };
 
    const action = RemoveTodolistAC("todolistId2");
 
    const endState = tasksReducer(startState, action)
 
 
    const keys = Object.keys(endState);
 
    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).not.toBeDefined();
 });
 
 





