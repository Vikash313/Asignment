import { QUEST_NEXT_ASYNC } from '../constants/quiz'
//export const QUESTION_NEXT = 'QUESTION_NEXT';


const initialState = {
    cIndex: 0
};


console.log("Initialstate", initialState)

const Reducer = (state = initialState, action) => {
    const newState = {...state};
    //console.log("action" , action.value)
    switch (action.type) {
        case QUEST_NEXT_ASYNC:
            console.log("Action" , action.value)
            console.log("NEWINDEX", newState.cIndex)
            return {
                cIndex: newState.cIndex + action.value  
            } 
        default: return state;
    }
    
};


export default Reducer




// const Reducer = (state= initialState, action ) => {
//     const newState = {...state};
//     switch (action.type) {
//         case 'QUEST_NEXT_ASYNC' :
//             console.log("ACTION", action.value)
//             console.log("CINDEX", newState.cIndex)
//             newState.cIndex = newState.cIndex + action.value;
//             break;
//         case 'QUEST_NEXT':
//             newState.cIndex = newState.cIndex + action.value;
//             break;
//     }

// }