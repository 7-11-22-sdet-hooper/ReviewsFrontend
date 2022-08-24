import { useEffect, useState } from "react"
import axios from "axios";
import { ImCross } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { quizDummyData } from "./DummyData";
import SideBar from "./SideBar";
import { setIsDone, setQuestionNum, setSelections } from "../slices/quizSlice";

const Quiz = () => {


    const [quizData, setQuizData] = useState([])
    const [results, setShowResults] = useState(false)


    const dispatch = useDispatch()
    const current_question = useSelector((state) => state.quizSlice.current_question)
    const quiz_selections = useSelector((state) => state.quizSlice.quiz_selections)
    const isDone = useSelector((state) => state.quizSlice.isDone)


    useEffect(() => {
            axios.get('https://test.javalearninglab.com/api/quiz', 
            {
                headers: 
                {
                "Access-Control-Allow-Origin": "*",
                }
        })
            .then(res =>{
                setQuizData([...res.data])
            })
            .catch(err =>{
                console.log(err)
            })

        // setQuizData([...quizDummyData])
    }, [])

    const toggleChoice = (e, isCorrect, questionNum) => {
        e.preventDefault()

        const selection = e.target.value || e.target.parentElement.value || e.target.parentElement.parentElement.value

        dispatch(setSelections({ selection: selection, isCorrect: isCorrect, questionNum: questionNum }))

    }

    const nextQuestion = (e) => {
        e.preventDefault()

        dispatch(setQuestionNum(current_question + 1))
    }

    const prevQuestion = (e) => {
        e.preventDefault()


        dispatch(setQuestionNum(current_question - 1))
    }

    const submitQuiz = (e) => {
        e.preventDefault()
        dispatch(setIsDone())
    }
    const showResults = (e) => {
        e.preventDefault()

        setShowResults((state) => !state)
    }
    return (
        <>

            <div className="quiz-con">
                {quizData.map((quiz, questionNum) => {
                    if (current_question == questionNum) {
                        return (
                            <div className="quiz-form-con" key={quiz.question + "con" + questionNum}>
                                <div className="quiz-question-con">


                                    <h3 className="quiz-question" key={quiz.question + questionNum}>
                                        {quiz.question}
                                    </h3>
                                </div>


                                <div className="quiz-curr-question-con" key={"quiz-curr-question-con" + questionNum}>
                                    <span key={"quiz-curr-question" + questionNum}>Question {questionNum + 1}/{quizData.length}</span>
                                </div>

                                {/* ANSWER CHOICES MAP */}
                                <div className="quiz-answer-con" key={"quiz-answer-con" + questionNum}>
                                    {quiz.choices.map((choice, idx) => {

                                        return (

                                            <button
                                                type={"radio"}
                                                className={
                                                    isDone ?

                                                        //if submitted, checks if answer chose is the correct answer
                                                        choice.isCorrect ?
                                                            'quiz-right-answer' :
                                                            quiz_selections.includes(choice.question) ?

                                                                'quiz-wrong-answer'
                                                                : "quiz-selection-grayed"

                                                        : quiz_selections.includes(choice.question) ? "quiz-selection" : "quiz-answer"
                                                }
                                                disabled={isDone}

                                                key={"quiz-selection" + idx}
                                                onClick={event => toggleChoice(event, choice.isCorrect, questionNum)}
                                                value={choice.question}
                                                id={"quiz-selection" + choice.question}>

                                                {
                                                    //checks if quiz is done
                                                    isDone ?

                                                        //checks if selections include answer 

                                                        choice.isCorrect ? <ImCheckmark id="quiz-right-icon" /> :
                                                            quiz_selections.includes(choice.question) ?
                                                                <ImCross id="quiz-wrong-icon" />
                                                                //if selections dont include answer dont show X or Checkmark
                                                                : ''

                                                        : <div className="quiz-selection-circle-con">
                                                            {/* Renders inner circle on selection */}

                                                            {quiz_selections.includes(choice.question) ?
                                                                <div className="quiz-selection-inner-circle" key={"quiz-selection-inner-circle" + idx} />
                                                                : null}

                                                        </div>
                                                }

                                                <p key={"quiz-selection-label" + idx} className="quiz-choice" id={"quiz-choice" + idx}>{choice.question}</p>
                                            </button>
                                        )
                                    })}

                                </div>

                                <div className="quiz-button-con">


                                    {current_question !== quizData.length - 1 ?
                                        <button
                                            id="quiz-next-button"
                                            disabled={!quiz_selections[current_question] ? true : false}

                                            onClick={nextQuestion}>Next</button> : ''}

                                    {current_question == quizData.length - 1 && !isDone ?
                                        <button
                                            id="quiz-submit-button"
                                            disabled={!quiz_selections[current_question] ? true : false}
                                            onClick={submitQuiz}>Submit</button> : ''}


                                    {isDone ?
                                        <button
                                            id="quiz-results-button"
                                            onClick={showResults}>Results</button> : ''}


                                    {current_question !== 0 ?
                                        <button id="quiz-back-button"
                                            onClick={prevQuestion}>Back</button> : ''}
                                </div>
                            </div>
                        )

                    }
                })}
            </div>
        </>
    )

}

export default Quiz;