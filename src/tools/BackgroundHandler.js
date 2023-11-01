

const backgroundChanger = function ( imgSource, mode ) {

    // Get background container
    const background = document.getElementsByClassName("background")[0]

    // Create new Image and set its source
    const newImage = document.createElement("img")
    newImage.src = imgSource

    if(mode) {
        newImage.classList.add("backgroundImgTop")
    }else{
        newImage.classList.add("backgroundImg")

    }
    newImage.classList.add("backgroundTransition")
    background.firstChild.classList.add("moveOutTransition")
    background.appendChild(newImage)

    setTimeout( () => {
        background.removeChild(background.firstElementChild)
    }, 1000)
}


export default backgroundChanger