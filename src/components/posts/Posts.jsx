import React from 'react'
import Estefany from '../../assets/estefany.png'
import Estefany2 from '../../assets/estefany2.png'
import Post from '../post/Post'
import './posts.scss'

const Posts = () => {
  //Temporary Posts

  const posts = [
    {
      id:1,
      name:"Estefany Pereyra",
      UserId: 1,
      profilePic: `${Estefany}`,
      description:"Te amo tanto Luis, te amo mucho",
      img: `${Estefany2}`
    },

    {
      id:2,
      name:"Josue Gonzalez",
      UserId: 2,
      profilePic: `${Estefany}`,
      description:"Amazing Trip",
      img: `${Estefany2}`
    },   


    {
      id:3,
      name:"Josue Gonzalez",
      UserId: 3,
      profilePic: `${Estefany}`,
      description:"Amazing Trip",
      img: `${Estefany2}`
    }
  ]

  return (
    //Temporary data
    <div className='posts'>
      {posts.map(post=>(
        <div className="post">
          <Post post={post} key={post.id}/>
        </div>
      ))}
    </div>
  )
}

export default Posts
