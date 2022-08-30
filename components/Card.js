import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

import { HiOutlineArrowRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { fetchVocabData, setCurrentCategory } from "../slices/vocabSlice";
import CardNavBar from "./CardNavBar";
import { cardDummyData } from "./DummyData";

const Card = () => {

    const [cardId, setCardId] = useState(null)
    // const [vocabData, setVocabData] = useState([])

    const  router  = useRouter()


    const dispatch = useDispatch()
    const vocabData = useSelector((state) => state.vocabSlice.vocab_data)
    const currentCategory = useSelector((state) => state.vocabSlice.current_category)

    useEffect(() => {

        let hostname

        if (typeof window !== 'undefined') {
             hostname = window.location.origin;
         }


        dispatch(fetchVocabData(hostname))
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
        <div className="card-view-con"  >
            <CardNavBar />
            <div className="card-con">
            {vocabData.map(keys => {
                if(currentCategory == 'all' || keys.category.name == currentCategory){
                return (
                    <div className="card" key={keys.category.name + keys.id + ''} onClick={toggleCard} data-testid={keys.category.name + keys.id} id={keys.category.name + keys.id}>


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

            }


            })}
            </div>
        </div>
    )
}

export default Card