import axios from "axios";
import { useEffect, useState } from "react"

import { HiOutlineArrowRight } from "react-icons/hi";
import { cardDummyData } from "./DummyData";

const Card = () => {

    const [cardId, setCardId] = useState(null)
    const [vocabData, setVocabData] = useState([])

    useEffect(() => {

            axios.get('https://test.javalearninglab.com/api/vocab', 
            {
                headers: 
                {
                "Access-Control-Allow-Origin": "*",
                }
        })
            .then(res =>{
                setVocabData([...res.data])
            })
            .catch(err =>{
                console.log(err)
            })

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
                    <div className="card" key={keys.category + keys.vocab_id + ''} onClick={toggleCard} id={keys.category + keys.vocab_id}>


                        {cardId == keys.category + keys.vocab_id ? '' :
                            <div className="card-keyword-con">

                                <h1 className={cardId == keys.vocab_id ? "card-active card-keyword" : 'card-keyword'}>{keys.word}</h1>

                            </div>
                        }


                        <div className={cardId == keys.category + keys.vocab_id ? "active-circle-con" : 'circle-con'}>


                            <div className={cardId == keys.category + keys.vocab_id ? "active-circle" : 'big-circle'}>

                                {cardId == keys.category + keys.vocab_id ?
                                    <div className="card-keyword-con">

                                        <h1 className="card-active-keyword card-keyword" >{keys.word}</h1>

                                    </div> : ''

                                }
                            </div>
                            <p className="card-def">{cardId == keys.category + keys.vocab_id ? keys.wordDefinition : ''} </p>

                        </div>



                    </div>
                )
            })}
        </div>
    )
}

export default Card