import mainTunisiaImg from "../assets/adventure-tunisia-main.jpg"

import tunisia1 from '../assets/tunisia1.jpg'
import tunisia2 from '../assets/tunisia2.jpg'


const adventuresData = {

    tunisia: {
        name: "Tunisia",
        mainImage: mainTunisiaImg,
        entries: [
            {
                day: 1,
                date: "2020 - 7 - 5",
                description: "Some some lizards and stuff",
                images: [
                    {
                        url: tunisia1,
                        description: "Lizard looking at the camera. Chillin on the  hot dessert sun"
                    },{
                        url: tunisia2,
                        description: "Beuatiful sunset over the desert"
                    }
                ]
            },
            {
                day: 2,
                date: "2020 - 7 - 6",
                description: "Descrip",
                images: [
                    {
                        url: tunisia1,
                        description: "Lizard looking at the camera. Chillin on the  hot dessert sun"
                    },{
                        url: tunisia1,
                        description: "Lizard"
                    }
                ]
            }
        ]
    }
}

export default adventuresData;