import { useEffect, useState } from "react"

import { ImCross } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";
import { useDispatch, useSelector} from "react-redux";
import { quizDummyData } from "../../components/DummyData";
import Quiz from "../../components/Quiz";
import Results from "../../components/Results";
import SideBar from "../../components/SideBar";
import { setIsDone, setQuestionNum, setSelections } from "../../slices/quizSlice";

const QuizIndex = () =>{

    const isDone = useSelector((state) => state.quizSlice.isDone)

    useEffect(() =>{
    

    },[])

  

    
    return(
        <div>
            <SideBar />
               {isDone ? <Results /> : <Quiz />}
        </div>
    )

}

export default QuizIndex;