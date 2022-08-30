import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { quizDummyData } from "../components/DummyData";
import { wrapper } from "../store";
import { current } from '@reduxjs/toolkit'


export const fetchQuizData = createAsyncThunk(
    'quiz/fetchQuizData',
    async (url) => {
  
        console.log(url)
        let response

        //if using localhost
        if(url == 'http://localhost:3000' || url == 'https://bespoke-scone-ba3a56.netlify.app'){

             response = await axios.get('https://test.javalearninglab.com/api/quiz', {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                }
            }
            )
    
        }

        //if not running on localhost 
        else{
              response = await axios.get(`${url}/api/quiz`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                }
            }
            )
            
        }

        return response.data
    }
)

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        quiz_data: [],
        quiz_selections: [],
        correct_answers: [],
        rightArr: [],
        wrongArr: [],
        current_question: 0,
        amount_correct: 0,
        user_score: 0,
        error: '',
        choice: '',
        isLoading: false,
        expandDef: false,
        isDone: false,
        isReview: false,
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
                        if (ch.isCorrect){

                            return solutionArr.push(ch.question)
                        } 
                    }
                    )
                )
            })

            let question_amount = state.quiz_data.length

            let amountRight = 0
           
            for (let i = 0; i < state.quiz_selections.length; i++) {

                if (solutionArr[i] == state.quiz_selections[i] ) {
                    amountRight += 1
                }else{
                }
            }
            const user_score = Math.round(100 / question_amount * amountRight)
       

            state.correct_answers = solutionArr

            state.user_score = user_score
            state.isDone = true

    

        },
        retryQuiz(state, action) {

            state.current_question = 0
            state.quiz_selections = []
            state.isDone = false
        },
        setReviewQuiz(state, action) {

            state.current_question = 0
            state.isReview = true
            state.isDone = false
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


export const { setSelections, setQuestionNum, setIsDone, retryQuiz, getQuizData, setExpandDef,autoFill,setReviewQuiz} = quizSlice.actions
export default quizSlice.reducer