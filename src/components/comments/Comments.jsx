import { useContext } from 'react'
import './comments.scss'
import { AuthContext } from '../../context/authContext'
const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    const comments = [
        {
            id:1,
            desc: "Increible",
            name: "Jose Luis",
            UserId: 1,
            img:
            "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },

        {
            id:2,
            desc: "Increible",
            name: "Jose Luis",
            UserId: 2,
            img:
            "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]


  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profile} alt="" />
            <input type="text" placeholder='Write a comment'/>
            <button>Send</button>
        </div>

        {comments.map(comment=>(
            <div className="comment">
                <img src={comment.img} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments
