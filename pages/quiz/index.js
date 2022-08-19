import { useEffect, useState } from "react"

import { BsCheckLg } from "react-icons/bs";
import { quizDummyData } from "../../components/DummyData";
import SideBar from "../../components/SideBar";

const Quiz = () =>{


    const [quizData, setQuizData] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentChoice, setCurrentChoice] = useState(null)

    useEffect(() =>{
        
    setQuizData([...quizDummyData])
    },[])

    const toggleChoice = (e) =>{
        e.preventDefault()

        const selection = e.target.value || e.target.parentElement.value || e.target.parentElement.parentElement.value

        if(currentChoice == selection){
            setCurrentChoice(null) 
          
        }else{
            setCurrentChoice(selection)
        }
    }

    const nextQuestion = (e) =>{
        e.preventDefault()

        setCurrentQuestion(currentQuestion + 1)
    }

    const prevQuestion = (e) =>{
        e.preventDefault()

        setCurrentQuestion(currentQuestion - 1)
    }
    return(
        <div>
               <SideBar />

               <div className="quiz-con">
                    {quizData.map((quiz, idx) =>{
                        if(currentQuestion == idx){
                            return(
                                <div className="quiz-form-con" key={quiz.question + "con" + idx}>
                                    <div className="quiz-question-con">


                                    <h3 className="quiz-question" key={quiz.question + idx}>
                                        {quiz.question}
                                        </h3>
                                    </div>


                                    <div className="quiz-curr-question-con" key={"quiz-curr-question-con" + idx}>
                                    <span key={"quiz-curr-question" + idx}>Question {idx + 1}/{quizData.length}</span>    
                                    </div>
                                    <div className="quiz-answer-con" key={"quiz-answer-con" + idx}>
                                    {quiz.choices.map((choice, idx) =>{
                                        return(
                                            
                                            <button
                                            className={ currentChoice == choice.answer ? "quiz-selection" : "quiz-answer"} 
                                         
                                            key={"quiz-selection" + idx} 
                                            onClick={toggleChoice} 
                                            value={choice.answer}
                                            id={"quiz-selection" + choice.answer}>

                                            <div className="quiz-selection-circle-con">
                                                {/* Renders inner circle on selection */}
                                                   
                                                    {currentChoice == choice.answer ?   
                                                    <div className="quiz-selection-inner-circle" key={"quiz-selection-inner-circle" + idx} /> 
                                                    : null}

                                            </div>


                                            <p key={"quiz-selection-label" + idx} className="quiz-choice" id={"quiz-choice" + idx}>{choice.answer}</p>
                                            </button>
                                        )
                                    })}

                                    </div>

                                    <div className="quiz-button-con">


                                    {currentQuestion !== quizData.length - 1 ? <button id="quiz-next-button" onClick={nextQuestion}>Next</button> : ''}
                                    {currentQuestion !== 0 ? <button id="quiz-back-button" onClick={prevQuestion}>Back</button> : ''}
                                    </div>
                                </div>
                            )

                        }
                    })}
               </div>
        </div>
    )

}

export default Quiz;