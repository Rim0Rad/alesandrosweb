import { useEffect } from "react"

import '../style/Van.css'
import vanInfo from '../data/vanInfo.js'

import backgroundChanger from '../tools/BackgroundHandler.js'
import bgImage  from '../assets/van_bg.jpg'
import vanImg from '../assets/uaz.png'
import DiagramButton from "./DiagramButton"


export default function Van () {

    useEffect( () => {
        backgroundChanger(bgImage)
    })


    return (
        <div id="vanPage">
            <h2>UAZ - SGR Combi Expedition</h2>
            <div id="diagramContainer">
                <img id="vanImage" src={vanImg}/>

                <DiagramButton id="engineButton" title="Engine" data={vanInfo.Engine}/>
                <DiagramButton id="transmmisionButton" title="Transmmision" data={vanInfo.Transmision}/>
                <DiagramButton id="measurmentsButton" title="Measurments" data={vanInfo.Measurments}/>
                <DiagramButton id="suspensionButton" title="Suspension" data={vanInfo.Suspension}/>
                <DiagramButton id="breaksButton" title="Breakes" data={vanInfo.Breaks}/>
                <DiagramButton id="tiresButton" title="Tires" data={vanInfo.Wheels}/>
                <DiagramButton id="fuelButton" title="Fuel" data={vanInfo.Fuel}/>
                <DiagramButton id="speedButton" title="Speed" data={vanInfo.Speed}/>
                <DiagramButton id="modificationButton" title="Modifications" data={vanInfo.Modifications}/>
            </div>
        </div>
    )
}