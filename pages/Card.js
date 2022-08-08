import { useEffect, useState } from "react"

const Card = () =>{

    const [cardId, setCardId] = useState(null)
    const [vocabData, setVocabData] = useState([])
   
    useEffect(() =>{


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

    },[])

    const toggleCard = (e) =>{
        e.preventDefault()

        //hides card info if it is already selected and clicked again. 
        if(cardId == e.target.id){
            setCardId(null)
        }else{
            setCardId(e.target.id)
        }

    }

    return(
        <div className="card-con"  >
            {/* <h1>Boolean</h1>

           {showAns ?  <p>True/False</p> : ''}  */}

            {vocabData.map(keys => {
                // console.log(keys)
                return(
                    <div className="card" onClick={toggleCard} id={keys.id}>
                        <h1>{keys.keyword}</h1>

                        <p>{cardId == keys.id ?  keys.def : ''} </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Card