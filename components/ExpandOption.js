import { useEffect, useState } from "react"
import axios from "axios";
import { ImCross } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { quizDummyData } from "./DummyData";
import SideBar from "./SideBar";
import {  setExpandDef,  } from "../slices/quizSlice";

const ExpandOption = () =>{


    const dispatch = useDispatch()
    
    const choice = useSelector((state) => state.quizSlice.choice)



    const expandSelection =(e, choice, quesNum) =>{
        e.preventDefault()

        dispatch(setExpandDef())
        // setExpandCon({choice: choice, quesNum: quesNum})
        
    }

    return(
        <div className="expand-con" onClick={expandSelection}>
        
                <div className="expand-def-con">
                <p id="expand-def">{choice}</p>
                </div>
        </div>
    )
}


export default ExpandOption