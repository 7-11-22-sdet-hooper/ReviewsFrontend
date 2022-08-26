import axios from "axios";
import { useEffect, useState } from "react"

import { HiOutlineArrowRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { fetchVocabData, setCurrentCategory } from "../slices/vocabSlice";
import { cardDummyData } from "./DummyData";

const CardNavBar = () => {

    const [cardId, setCardId] = useState(null)
    // const [vocabData, setVocabData] = useState([])

    const dispatch = useDispatch()
    const currentCategory = useSelector((state) => state.vocabSlice.current_category)

    useEffect(() => {

    }, [])

    const changeCategory = (e, category) =>{
        e.preventDefault()

        dispatch(setCurrentCategory(category))

    }

    return (
        <>
            <div className="card-navbar-con">

                    {/* All */}
                <button className={currentCategory == 'all' ?"current-category"  : "card-navbar-button"} 
                id="navbar-all" 
                onClick={(e) =>  changeCategory(e, 'all')}>All</button>
                
                    {/* JAVA */}
                <button className={currentCategory == 'Java' ?"current-category"  : "card-navbar-button"} 
                id="navbar-Java" 
                onClick={(e) => changeCategory(e, 'Java')} >Java</button>
                
                {/* OOP */}
                <button className={currentCategory == 'OOP' ?"current-category"  : "card-navbar-button"} 
                id="navbar-OOP" 
                 onClick={(e) => changeCategory(e, 'OOP')}>OOP</button>
                
                {/* SQL */}
                <button className={currentCategory == 'SQL' ?"current-category"  : "card-navbar-button"} 
                id="navbar-SQL"  
                onClick={(e) => changeCategory(e, 'SQL')}>SQL</button>
                
                    {/* METHODOLOGY */}
                <button className={currentCategory == 'Project Manager' ?"current-category"  : "card-navbar-button"}
                id="navbar-Methodology"  
                onClick={(e) => changeCategory(e,  'Project Manager')}>Methodology</button>
            </div>
        </>
    )
}

export default CardNavBar