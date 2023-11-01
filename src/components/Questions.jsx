import questionData from '../data/questions.js'
import QuestionCard from './QuestionCard.jsx'

import '../style/Questions.css'

export default function Questions () {


    return (
        <div id="questionsPage">
            <div id="questionsContent">
                <div id="questionsBox">
                    <p>Questions</p>
                    { questionData.map( (question, index) => {
                        return <QuestionCard key={index} data={question}/>
                    })}
                </div>
                <div id="postQuestionBox">
                    <div id="postQuestionForm">
                        <p>Ask a question</p>
                        <textarea placeholder='Your Question'></textarea>
                        <button id="sendBt"> Post Your Question</button>
                    </div>
                </div>
            </div>
        </div>
    )
}