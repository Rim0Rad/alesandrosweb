import { useNavigate } from "react-router-dom"

export default function TravelCard ( { data } ) {

    const navigate = useNavigate();


    function hanldeClick() {
        console.log(data.path)
        navigate("/" + data.path )
    }

    return (
        <div className="travelCard" 
            style={{ backgroundImage: `url(${data.image})`}}
            onClick={hanldeClick}
        >
            <p>{data.name}</p>
        </div>
    )
}