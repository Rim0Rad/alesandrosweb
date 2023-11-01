
export default function AdventureEntry ( { data }) {

    // TODO: navigate to diary entry for that day
    // How to focus on the specific entry of the diary?
    function handleDiaryClick () {
        console.log("Go To Diary Entry")
    
    }

    return (
        <div className="dayEntryContainer">
            
            <div id="dayEntryDataContainer">
                <div id="dayHeader">
                    <h3>Day { data.day }</h3>
                    <h3>Date {data.date}</h3>
                </div>
                <div id="diaryBody">
                    <div id="dayEntryDividerContainer" >
                        <hr id="dayEntryDivider"></hr>
                    </div>
                    <div id="diaryContentContainer">
                        <div id="dayDescriptionContainer">
                            <p>{data.description}</p>
                            <p className="link" onClick={handleDiaryClick}>Diary entry</p>
                        </div>
                        <div id="galleryContainer" >
                            {
                                data.images.map( ( image ) => {
                                    return (
                                        <div id="adventureImgContainer">
                                            <img src={ image.url } />
                                            <p>{image.description}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}