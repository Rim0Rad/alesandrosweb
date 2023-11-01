import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"



export default function NavDropdown ( { title, dropdownItems} ) {

    const navigate = useNavigate();

    const [ adventureTab, setAdventureTab ] = useState(false)

    useEffect(() => {}, [adventureTab])

    const handleMouseEnterAdventures = () => {
        setAdventureTab(true)
    }

    const handleMouseLeaveAdventures = () => {
        setAdventureTab(false)
    }



    return (

        <div className='drowDownContainer'
                onMouseEnter={handleMouseEnterAdventures}
                onMouseLeave={handleMouseLeaveAdventures}
        >
            <p className='dropDownButton'>{title}</p>

            { adventureTab && 
                <div className='menuDropDown'>
                    { dropdownItems.map(  (item, index) => {
                        return (
                            <p key={index} onClick={ () => {
                                    navigate(item.path)
                                }}
                            >{item.title}</p>
                        )
                    })}
                </div>
            }
        </div>
    )
}