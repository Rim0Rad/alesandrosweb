import { useNavigate } from "react-router-dom"

export default function NavButton ( { title, path } ) {
    const navigate = useNavigate();


    const handleClick = () =>{
        if(path){
            navigate("/" + path)
        }
    }


    return (
            <p className="navButton" onClick={handleClick}>{title}</p>
    )
}