import {configureStore, createSlice} from '@reduxjs/toolkit';

const answerCheck = createSlice({
    name: "CheckAnswer",
    initialState: {
        correctAnswerCount : 0
    },
    reducers : {
        addCorrectCount(state, action){
            state.correctAnswerCount++
        },
        resetCorrectCount(state, aciton){
            state.correctAnswerCount = 0
        }
    }
})

export const actions = answerCheck.actions
const store = configureStore({
    reducer: answerCheck.reducer
})
export default store;