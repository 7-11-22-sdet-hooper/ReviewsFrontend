import axios from "axios";
import { useEffect, useState } from "react"

import { HiOutlineArrowRight } from "react-icons/hi";

const Card = () => {

    const [cardId, setCardId] = useState(null)
    const [vocabData, setVocabData] = useState([])

    useEffect(() => {


        const data = [
            {
                category: 'basic',
                keyword: 'boolean',
                def: 'logical data type that can have only the values true or false',
                id: 1
            },
            {
                category: 'basic',
                keyword: 'string',
                def: 'series of characters that are interpreted literally by a script',
                id: 2
            },
            {
                category: 'basic',
                keyword: 'integer',
                def: "numbers without a fractional component, and don't support decimal points",
                id: 3
            },

        ]
        setVocabData([...data])
        // console.log(...vocabData.category)

        axios.get('http://137.184.139.89/vocab', 
        {
            headers: 
            {
            "Access-Control-Allow-Origin": "*",
            }
    })
        .then(data =>{
            console.log(data)
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
                    <div className="card" key={keys.keyword + keys.id + ''} onClick={toggleCard} id={keys.id}>


                        {cardId == keys.id ? '' :
                            <div className="card-keyword-con">

                                <h1 className={cardId == keys.id ? "card-active card-keyword" : 'card-keyword'}>{keys.keyword}</h1>

                            </div>
                        }


                        <div className={cardId == keys.id ? "active-circle-con" : 'circle-con'}>


                            <div className={cardId == keys.id ? "active-circle" : 'big-circle'}>
                            {/* <HiOutlineArrowRight className="circle-arrow"/> */}
                            {cardId == keys.id ? 
                            <div className="card-keyword-con">

                                <h1 className="card-active-keyword card-keyword" >{keys.keyword}</h1>

                            </div> : ''

                            }
                            </div>
                            <p className="card-def">{cardId == keys.id ? keys.def : ''} </p>

                        </div>



                    </div>
                )
            })}
        </div>
    )
}

export default Card