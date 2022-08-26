import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { quizDummyData } from "../components/DummyData";
import { wrapper } from "../store";


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
            console.log('quiz data: ', state.quiz_data)
        },
        setSelections(state, action) {
            const { isCorrect, amount_correct, selection, questionNum } = action.payload

            //cam only be 1 or 0
            let placeholderAmt = 0
            const initArr = []

            // if(isCorrect && state.current_question == questionNum){
            //     state.amount_correct ++
            //     console.log('right: ', state.amount_correct)
            // }
            // else if(!isCorrect && state.amount_correct !== 0 && state.current_question == questionNum){
            //     state.amount_correct --
            //     console.log('wrong: ', state.amount_correct)
            // }

            // initArr[state.current_question] = selection

            state.quiz_selections[state.current_question] = selection
            // console.log('selections: ', state.current_question)
            console.log('selections: ', state.quiz_selections)

        },
        setQuestionNum(state, action) {

            state.current_question = action.payload
        },
        setIsDone(state, action) {
            //    const rightAnsArr = [...quizDummyData.choices]
            let solutionArr = []


            quizDummyData.map((choice) => {
                return (
                    choice.choices.filter((ch) => {
                        if (ch.isCorrect) return solutionArr.push(ch.answer)
                    }
                    )
                )
            })

            let question_amount = quizDummyData.length

            let amountRight = 0


            for (let i = 0; i < state.quiz_selections.length; i++) {

                if (solutionArr.includes(state.quiz_selections[i])) {
                    amountRight += 1

                }
            }
            const user_score = Math.round(100 / question_amount * amountRight)
            // const user_score = 100 / question_amount * amountRight 

            console.log('myselections: ', state.quiz_selections)
            // console.log(state.amount_correct)
            console.log('soltuion: ', solutionArr)

            state.correct_answers = solutionArr

            // console.log(state.amount_correct)
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


export const { setSelections, setQuestionNum, setIsDone, retryQuiz, getQuizData, setExpandDef } = quizSlice.actions
export default quizSlice.reducer