import { useEffect, useState } from 'react';
import '../style/Diary.css'

import bgImage  from '../assets/diary_bg_croped.jpg'
import backgroundChanger from '../tools/BackgroundHandler.js'

// Will retireve this from back end
import countries from '../data/diary.js'

export default function Diary ( ) {

    
    useEffect( () => {
        // backgroundChanger(bgImage, true)
    }, [])
   

    const [ targetCountry, setTargetCountry ] = useState(false)


    const handleTunisiaClick  = (e) => {
        if(e.target.id === "Tunisia"){
            setTargetCountry(e.target.id)
        }
    }

    useEffect( () => {}, [targetCountry])

    // Switch between display of a list of countries and diary entries for that country
    const switchCountry = () => {

        const country = countries.find( (country) => {
            return targetCountry === country.name;
        })
        
        if(country){
            return (
                <div id="diaryEntries">
                    <h1>{country.name}</h1>
                    {country.diaryEntries.map( (entry) => {
                        return (
                            <div id="diaryEntry">
                                <hr></hr>
                                <div id="spacetimeCotainer">
                                    <p>{entry.location}</p>
                                    <p>{entry.date}</p>
                                </div>
                                <p>{entry.text}</p>
                            </div>
                        )
                    })}
                </div>
            )
        }else {
            return (
                <div id="contentContainer">
                    <h2>Diaries</h2>
                    <div id="countriesContainer">
                        <div id="diary-countries">
                            <div className='diary-country-container'>
                                <h3>Romania</h3>
                            </div>
                            <div className='diary-country-container'>
                                <h3>Moldova</h3>
                            </div>
                            <div className='diary-country-container' onClick={handleTunisiaClick}>
                                <h3 id="Tunisia">Tunisia</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
            
    }

    return (
        <div id="diaryPage">
            <img src={bgImage}/>
            { switchCountry() }                
        </div>
    )
}