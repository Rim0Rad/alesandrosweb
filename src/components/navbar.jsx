import '../style/NavBar.css'

import NavButton from './NavButton.jsx'
import NavDropdown from './NavDropdown'


export default function NavBar ( { id }) {

    

    return (
        <div id={id}>
            <NavButton title="Home" path="home"/>
            <NavButton title="Diary" path="diary"/>

            <NavDropdown title="Adventures" dropdownItems={[{title: "Adventure List", path: "/adventures"}, {title: "Map", path: "/map"}]}/>
            <NavDropdown title="Publicity" dropdownItems={[{title: "User Photos", path: "/userphotos"}, {title: "Media", path: "/media"}]}/>
            <NavDropdown title="About" dropdownItems={[{title: "Alessandro", path: "/alessandro"}, {title: "The Van", path: "/van"}, {title: "Q&A", path: '/questions'}]}/>

            <NavButton title="Contacts" path="contacts"/>
        </div>
    )
}