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
    // console.log(...vocabData.category)

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
   

            {vocabData.map(keys => {
                return(
                    <div className="card" onClick={toggleCard} id={keys.id}>

                        <div className="big-circle"/>
                        <div className="med-circle"/>
                        <div className="small-circle"/>

                        <h1 className="card-keyword">{keys.keyword}</h1>

                        <p className="card-def">{cardId == keys.id ?  keys.def : ''} </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Card