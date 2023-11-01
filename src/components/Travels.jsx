import TravelCard from './TravelCard.jsx'
import travelData from '../data/travels.js'

import '../style/Travels.css'

export default function Travels () {


    function createTravelCards ( ){
        const travels = []
        for(let travel in travelData){
            travels.push(<TravelCard key={travel} data={travelData[travel]}/>)
        }
        return travels
    }

    return (
        <div id="travelsPage">
            <h2>Aventures</h2>
            { createTravelCards() }
        </div>
    )
}