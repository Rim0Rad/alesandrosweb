import '../style/Background.css'

export default function Background ( { bgImage, mode }) {

    return  <div className="background">
                { mode ? 
                     <img id="backgroundImg" src={ bgImage }/>
                     :
                     <img id="backgroundImgTop" src={ bgImage }/>
                }
            </div>
}