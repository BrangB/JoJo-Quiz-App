import {configureStore, createSlice} from '@reduxjs/toolkit';

const answerCheck = createSlice({
    name: "CheckAnswer",
    initialState: {
        correctAnswerCount : 0,
        currentPage : 0
    },
    reducers : {
        addCorrectCount(state, action){
            state.correctAnswerCount++
        },
        resetCorrectCount(state, aciton){
            state.correctAnswerCount = 0
        },
        reduceCheckIndex(state, action){
            // if(state.currentPage <= 0){
            //     state.currentPage = 0
            // }else{
            //     state.currentPage--
            // }
            state.currentPage--
        },
        increaseCheckIndex(state, action){
            state.currentPage++
        }
    }
})

export const actions = answerCheck.actions
const store = configureStore({
    reducer: answerCheck.reducer
})
export default store;
