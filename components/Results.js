import { useEffect, useState } from "react"

import { ImCross } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";
import { useDispatch, useSelector} from "react-redux";
import { quizDummyData } from "./DummyData";
import SideBar from "./SideBar";
import { retryQuiz, setIsDone, setQuestionNum, setSelections } from "../slices/quizSlice";

const Results = () =>{


  


    const dispatch = useDispatch()
    const user_score = useSelector((state) => state.quizSlice.user_score)

    
    useEffect(() =>{
    

    },[])

    const tryAgain = (e) =>{
        e.preventDefault()
        
        dispatch(retryQuiz())

    }
    return(
        <>
               <div className="quiz-con">
                    <div className="quiz-form-con">

                            <div className="quiz-question-con">


                                <h3 className="quiz-question">
                                    Results
                                </h3>
                            </div>

                            <div className="quiz-results-con">
                                <h2>Your Score: {user_score}%</h2>

                            </div>
                            <button id="quiz-tryagain-button" 
                                    onClick={tryAgain}>Try Again</button>
                    </div>
               </div>
        </>
    )

}

export default Results;