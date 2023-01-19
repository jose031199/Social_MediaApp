import React, { useContext } from 'react'
import Estefany from '../../assets/estefany.png'
import Damaris from '../../assets/damaris.jpg'
import Aranza from '../../assets/aranza.jpg'
import muchacha from '../../assets/muchacha.jpg'
import './stories.scss'
import { AuthContext } from '../../context/authContext';



const Stories = () => {
    const {currentUser} = useContext(AuthContext)

    const stories = [
        {
            id:1,
            name:"Damaris Nallely",
            img:`${Damaris}`
        },
        {
            id:2,
            name:"Estefany Pereyra",
            img:`${Estefany}`
        },

        {
            id:3,
            name:"Aranza",
            img:`${Aranza}`
        },
        {
            id:4,
            name:"Estefany Pereyra",
            img:`${Estefany}`
        },

        {
            id:5,
            name:"Muchacha",
            img:`${muchacha}`
        },
    ];

  return (
    //Temporaray Data
    <div className='stories'>
            <div className="story">
                <img src={currentUser.profile} alt="" />
                <span>{currentUser.username}</span>
                <button>+</button>
            </div>

        {stories.map((story)=>
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        )}
    </div>
  )
}

export default Stories
