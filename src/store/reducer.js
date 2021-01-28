//export const QUESTION_REQUEST = 'QUESTION_REQUEST';
export const QUESTION_NEXT = 'QUESTION_NEXT';

const initialQuestionState = {
    answer: null,
    score: null
};

const Reducer = (state = initialQuestionState, action) => {
    const newState = {...state}
    switch (action.type) {
        case QUESTION_NEXT: {
            return {
                answer: Answer + action.value,
                score: score + action.value
            };
        }
        default: return state;
    }
};

export default Reducer
