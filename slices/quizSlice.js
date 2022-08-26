import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { quizDummyData } from "../components/DummyData";
import { wrapper } from "../store";
import { current } from '@reduxjs/toolkit'


export const fetchQuizData = createAsyncThunk(
    'quiz/fetchQuizData',
    async () => {
        const response = await axios.get('https://test.javalearninglab.com/api/quiz', {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        }
        )
        return response.data

    }
)

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        quiz_data: [],
        quiz_selections: [],
        current_question: 0,
        isDone: false,
        amount_correct: 0,
        correct_answers: [],
        user_score: 0,
        isLoading: false,
        error: '',
        expandDef: false,
        choice: ''
    },
    reducers: {
        getQuizData(state, action) {


            const data = axios.get('https://test.javalearninglab.com/api/quiz',
                {
                    headers:
                    {
                        "Access-Control-Allow-Origin": "*",
                    }
                })




            state.quiz_data = data.data
        },
        setSelections(state, action) {
            const { isCorrect, amount_correct, selection, questionNum } = action.payload
        
            state.quiz_selections[state.current_question] = selection

        },
        setQuestionNum(state, action) {

            state.current_question = action.payload
        },
        setIsDone(state, action) {
            let solutionArr = []

            const quizData  = action.payload


            quizData.map((choice) => {
                return (
                    choice.choices.filter((ch) => {
                        if (ch.isCorrect) return solutionArr.push(ch.question)
                    }
                    )
                )
            })

            let question_amount = state.quiz_data.length

            let amountRight = 0


            for (let i = 0; i < state.quiz_selections.length; i++) {

                if (solutionArr[i] == state.quiz_selections[i] ) {
                    amountRight += 1

                }
            }
            const user_score = Math.round(100 / question_amount * amountRight)
       

            state.correct_answers = solutionArr

            state.user_score = user_score
            state.isDone = !state.isDone

        },
        retryQuiz(state, action) {

            state.current_question = 0
            state.quiz_selections = []
            state.isDone = !state.isDone
        },
        setExpandDef(state, action) {

            state.choice = action.payload
            state.expandDef = !state.expandDef
        },
        autoFill(state, action) {

            state.isDone = !state.isDone
        },


    },
    extraReducers: (builder) => {

        //! QUIZ API
        builder.addCase(fetchQuizData.pending, (state) => {
            state.quiz_data = [];
            state.isLoading = true;
        });
        builder.addCase(
            fetchQuizData.fulfilled, (state, { payload }) => {
                state.quiz_data = payload;
                state.isLoading = false;
            });
        builder.addCase(
            fetchQuizData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });


    }
})


export const { setSelections, setQuestionNum, setIsDone, retryQuiz, getQuizData, setExpandDef,autoFill} = quizSlice.actions
export default quizSlice.reducer