import {configureStore, createSlice} from '@reduxjs/toolkit';

const answerCheck = createSlice({
    name: "CheckAnswer",
    initialState: {
        correctAnswerCount : 0,
        currentPage : 0,
        currentContent : ""
    },
    reducers : {
        addCorrectCount(state, action){
            state.correctAnswerCount++
        },
        resetCorrectCount(state, aciton){
            state.correctAnswerCount = 0
        },
        reduceCheckIndex(state, action){
            state.currentPage--
        },
        increaseCheckIndex(state, action){
            state.currentPage++
        },
        changeCurrentContent(state, action){
            state.currentContent = action.payload
        }
    }
})

export const actions = answerCheck.actions
const store = configureStore({
    reducer: answerCheck.reducer
})
export default store;
