import tiktockIcon from '../assets/tiktok.svg'
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'

import '../style/Contacts.css'


export default function Contacts () {

    return (
        <div id="contactsPage">
            <div id="contactsContainer">
                <div id="socialmediaContainer">
                    <img src={instagramIcon}/>
                    <img src={facebookIcon}/>
                    <img src={tiktockIcon}/>
                </div>
                <hr></hr>
                <div id="sendMessageContainer">
                    <p>Send a Message</p>
                    {/* <div id="userDetailsContainer"> */}
                        <input type="text" placeholder='Name'></input>
                        <input type="text" placeholder='Email'></input>
                    {/* </div> */}
                    <textarea id="messageTextBox" type="textBox" placeholder=' Your Message'></textarea>
                    <button id="sendBt" type="submit">Send Message</button>
                </div>
            </div>
        </div>
    )
}