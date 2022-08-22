import { createSlice } from "@reduxjs/toolkit";
import { quizDummyData } from "../components/DummyData";
import { wrapper } from "../store";

const quizSlice = createSlice({
    name: 'quiz',
   initialState: {
        quiz_selections: [],
        current_question: 0,
        isDone: false,
        amount_correct: 0,
        correct_answers: [],
        user_score: 0
    },
reducers:{
    setSelections(state, action){
        const {isCorrect, amount_correct, selection, questionNum} = action.payload


        
        
        
        if(isCorrect && state.current_question == questionNum){
            state.amount_correct ++
        }
        else if(!isCorrect && state.amount_correct !== 0 && state.current_question == questionNum){
            state.amount_correct --
        }
        
        state.quiz_selections[state.current_question] = selection
        
        // console.log(state.amount_correct)

    },
    setQuestionNum(state, action){

        state.current_question = action.payload
    },
    setIsDone(state, action){
//    const rightAnsArr = [...quizDummyData.choices]
        let solutionArr = []


       quizDummyData.map((choice) => {
            return (
           choice.choices.filter((ch) => {
                if(ch.isCorrect) return solutionArr.push(ch.answer)
            }
            )
            )
        })

       let question_amount = quizDummyData.length

       let amountRight = 0
       console.log(state.quiz_selections)


       for (let i = 0; i < state.quiz_selections.length; i++) {

        if (solutionArr.includes(state.quiz_selections[i])) {
            amountRight += 1

        }
    }
        const user_score = 100 / question_amount * amountRight
        
    
        state.correct_answers = solutionArr

        // console.log(state.amount_correct)
        state.user_score = user_score
        state.isDone = !state.isDone

    },
    retryQuiz(state, action){

        state.current_question = 0
        state.quiz_selections = []
        state.isDone = !state.isDone
    },
    
    
}
})


export const {setSelections, setQuestionNum,setIsDone, retryQuiz} = quizSlice.actions
export default quizSlice.reducer