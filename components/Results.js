import { useEffect, useState } from "react"

import { ImCross } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { quizDummyData } from "./DummyData";
import SideBar from "./SideBar";
import { retryQuiz, setIsDone, setQuestionNum, setReviewQuiz, setSelections } from "../slices/quizSlice";
const cssRoot = {

    'success': '#54CD7D',
    'fail': '#E57A73',

    'success_darker': '#43A464',
    'fail_darker': '#A05551',
    primary: '#9F42E9',
    prim_darker: '#6f2ea3',
    prim_light: '#b267ed',
    prim_lighter: '#bb7aef',
    dark: '#161618',
    light: '#222225',
    text: '#e7e9ea'
}

const Results = () => {

    const dispatch = useDispatch()
    const user_score = useSelector((state) => state.quizSlice.user_score)
    const quiz_selections = useSelector((state) => state.quizSlice.quiz_selections)


    useEffect(() => {

        ; let progressBar = document.querySelector('.quiz-results-outer')



        let progressValue = 0
        let progressEndValue = user_score
        let speed = 10

        let progress = setInterval(() => {
            progressValue++
            // valueContainer.textContent 
            progressBar.style.background = `conic-gradient(
                ${user_score < 70 ? cssRoot.fail : cssRoot.success} ${progressValue * 3.6}deg,
                ${user_score < 70 ? cssRoot.prim_darker : cssRoot.prim_darker} ${progressValue * 3.6}deg
            )`
            progressBar.style.imageBackground = `background-image: radial-gradient(
                 ${cssRoot.dark} 5px,
                 transparent 6px
             );`



            if (progressValue == progressEndValue) {
                clearInterval(progress)
            }

        }, speed)

    }, [])

    const tryAgain = (e) => {
        e.preventDefault()

        dispatch(retryQuiz())

    }
    const reviewQuiz = (e) => {
        e.preventDefault()
        
        dispatch(setReviewQuiz())

    }
    return (
        <>
            <div className="quiz-con">
                <div className="quiz-form-con">

                    <div className="quiz-results-con">



                        <div className="quiz-results-outer">
                            <div className="quiz-results-inner">

                                <h2 id="quiz-results-percent">{user_score}%</h2>
                                <h4 id="quiz-results-subtitle">Your Score</h4>
                            </div>

                        </div>
                        {/* <h3 className="quiz-question">
                                    Results
                                </h3> */}
                    </div>

                    <div className="quiz-tryagain-con">


                        <button id="quiz-review-button"
                            onClick={reviewQuiz}>Review</button>

                        <button id="quiz-tryagain-button"
                            onClick={tryAgain}>Play Again</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Results;