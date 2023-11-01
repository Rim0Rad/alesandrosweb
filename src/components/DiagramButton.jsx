import { useState } from "react"


export default function DiagramButton ( { id, title, data}) {

    const [ vanButtonOn, setVanButtonOn ] = useState(true)

    function handleClick(e) {

        const vanButton = document.getElementsByClassName(id)[0]
        vanButton.classList.add("infoContainer")
        setVanButtonOn(false)
        for(let key in data){
            vanButton.appendChild(createVanInfoBox(id, data, key))
        }

    }

    function handleMouseLeave (){

        // const vanButton = document.getElementsByClassName("infoBox")[0]
        // console.log("vanButton ", vanButton)
        // if(vanButton.length > 0){
        //     for(let key = 0; key < vanButton.length; key++){
        //         vanButton[key].remove();
        //     }
        // }

        // vanButton.remove()
        // setVanButtonOn(true)
    }


    return (
        <div id={id} className={`vanButtonContainer ${id}`} onMouseLeave={handleMouseLeave} >
            { vanButtonOn && 
                <div  className="vanButtonOuter" onClick={handleClick}>
                    <div className="vanButtonInner">
                        <p>{title}</p>
                    </div>
                </div>
            }
        </div>
    )
}

function createVanInfoBox(id, data, key){

    // Create container
    const container =  document.createElement("div")
    container.classList.add("infoBox")

    // Create key text box
    const keyPara = document.createElement("p")
    const keyText = document.createTextNode(key )
    keyPara.appendChild(keyText)

    // Create separator
    const separator =  document.createElement("hr")
    separator.classList.add("verticalSeparator")

    // Create value text box
    const valuePara = document.createElement("p")
    const valueText = document.createTextNode(data[key])
    valuePara.appendChild(valueText)

    container.appendChild(keyPara)
    container.appendChild(separator)
    container.appendChild(valuePara)


    return container;
}