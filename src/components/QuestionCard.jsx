import { useState } from "react"


export default function QuestionCard ( { data }) {

    const [ isAnswer, setIstAnswer ] = useState(false)

    function handleClick () {
        setIstAnswer(!isAnswer)
    }

    return (
        <div id="questionCard">
            <div id="question" onClick={handleClick}>
                <p>{data.question}</p>
            </div>
            { isAnswer &&
                <div id="answer">
                    <p>{data.answer}</p>
                </div>
            }   
        </div>
    )
}