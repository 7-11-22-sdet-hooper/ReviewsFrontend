import { useEffect, useState } from "react"

import { ImCross } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";
import { useDispatch, useSelector} from "react-redux";
import { quizDummyData } from "../../components/DummyData";
import ExpandOption from "../../components/ExpandOption";
import Quiz from "../../components/Quiz";
import Results from "../../components/Results";
import SideBar from "../../components/SideBar";
import { setIsDone, setQuestionNum, setSelections } from "../../slices/quizSlice";

const QuizIndex = () =>{

    const isDone = useSelector((state) => state.quizSlice.isDone)
    const expandDef = useSelector((state) => state.quizSlice.expandDef)

    useEffect(() =>{
    

    },[])

  

    
    return(
        <div>
            <SideBar />
            {/* <ExpandOption />  */}
           { expandDef ?   <ExpandOption /> : null}
               {isDone ? <Results /> : <Quiz />}
        </div>
    )

}

export default QuizIndex;