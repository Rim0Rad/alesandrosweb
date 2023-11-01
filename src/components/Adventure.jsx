import { useLocation } from "react-router-dom"

import AdventureEntry from './AdventureEntry.jsx'

import '../style/Adventure.css'
import adventuresData from '../data/adventureData.js'

export default function  Adventure ( { id }) {

    // const {state} = useLocation()

    // const adventure = adventuresData[state.id]
    // TODO: use id to fetch adventure data
    // useEffect( () => {
    // }, [])


    return (
        <div id="adventurePage">
            <div className="pageHeader">
                <img  src={adventuresData.tunisia.mainImage}/>
                <h2>{adventuresData.tunisia.name}</h2>
            </div>
            <div id="dayContainer">
                { adventuresData.tunisia.entries.map( entry => {
                    return <AdventureEntry data={entry}/>
                })}
            </div>
    
        </div>
    )
}