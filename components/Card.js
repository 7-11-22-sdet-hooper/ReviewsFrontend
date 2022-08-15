import axios from "axios";
import { useEffect, useState } from "react"

import { HiOutlineArrowRight } from "react-icons/hi";

const Card = () => {

    const [cardId, setCardId] = useState(null)
    const [vocabData, setVocabData] = useState([])

    useEffect(() => {

        axios.get('http://137.184.139.89/vocab', 
        {
            headers: 
            {
            "Access-Control-Allow-Origin": "*",
            }
    })
        .then(res =>{
            setVocabData([...res.data])
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })


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
                    <div className="card" key={keys.word + keys.vocab_id + ''} onClick={toggleCard} id={keys.vocab_id}>


                        {cardId == keys.vocab_id ? '' :
                            <div className="card-keyword-con">

                                <h1 className={cardId == keys.vocab_id ? "card-active card-keyword" : 'card-keyword'}>{keys.word}</h1>

                            </div>
                        }


                        <div className={cardId == keys.vocab_id ? "active-circle-con" : 'circle-con'}>


                            <div className={cardId == keys.vocab_id ? "active-circle" : 'big-circle'}>
                            {/* <HiOutlineArrowRight className="circle-arrow"/> */}
                            {cardId == keys.vocab_id ? 
                            <div className="card-keyword-con">

                                <h1 className="card-active-keyword card-keyword" >{keys.word}</h1>

                            </div> : ''

                            }
                            </div>
                            <p className="card-def">{cardId == keys.vocab_id ? keys.wordDefinition : ''} </p>

                        </div>



                    </div>
                )
            })}
        </div>
    )
}

export default Card