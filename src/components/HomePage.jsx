import { useEffect } from 'react';

import backgroundChanger from '../tools/BackgroundHandler.js'
import bgImage from '../assets/header_bg.png'

export default function Home () {

    useEffect( () => {
        backgroundChanger(bgImage)
    }, [])

    return (
        <div id="homePage">
           
        </div>
    )
}