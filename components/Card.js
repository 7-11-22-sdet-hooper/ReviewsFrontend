import axios from "axios";
import { useEffect, useState } from "react"

import { HiOutlineArrowRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { fetchVocabData } from "../slices/vocabSlice";
import { cardDummyData } from "./DummyData";

const Card = () => {

    const [cardId, setCardId] = useState(null)
    // const [vocabData, setVocabData] = useState([])

    const dispatch = useDispatch()
    const vocabData = useSelector((state) => state.vocabSlice.vocab_data)

    useEffect(() => {

        

        dispatch(fetchVocabData())
        // setVocabData([...cardDummyData])
        
    }, [])

    const toggleCard = (e) => {
        e.preventDefault()

        //hides card info if it is already selected and clicked again. 
        if (cardId == e.target.id) {
            setCardId(null)
        } else {
            setCardId(e.target.id)
        }

    }

    return (
        <div className="card-con"  >

            {vocabData.map(keys => {
                return (
                    <div className="card" key={keys.category.name + keys.id + ''} onClick={toggleCard} id={keys.category.name + keys.id}>


                        {cardId == keys.category.name + keys.id  ? '' :
                            <div className="card-keyword-con">

                                <h1 className={cardId == keys.category.name + keys.id ? "card-active card-keyword" : 'card-keyword'}>{keys.word}</h1>

                            </div>
                        }


                        <div className={cardId == keys.category.name + keys.id ? "active-circle-con" : 'circle-con'}>


                            <div className={cardId == keys.category.name + keys.id  ? "active-circle" : 'big-circle'}>

                                {cardId == keys.category.name + keys.id ?
                                    <div className="card-keyword-con">

                                        <h1 className="card-active-keyword card-keyword" >{keys.word}</h1>

                                    </div> : ''

                                }
                            </div>
                            <p className="card-def">{cardId == keys.category.name + keys.id ? keys.definition : ''} </p>

                        </div>



                    </div>
                )
            })}
        </div>
    )
}

export default Card