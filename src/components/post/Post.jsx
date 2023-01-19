import { Link } from 'react-router-dom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ShareIcon from '@mui/icons-material/Share';
import './post.scss'
import Comments from '../comments/Comments';
import { useState } from 'react';

const Post = ({post}) => {

  const [commentOpen,setCommentOpen] = useState(false);
  //Temporary
  const liked = false; 
  return (
    <div className='post'>
      <div className="container">
      <div className="user">
        <div className="userinfo">
          <img src={post.profilePic} alt="" />
          <div className="details">
            <Link to={`profile/${post.UserId}`} style={{textDecoration:'none', color:'inherit'}}>
              <span className='name'>{post.name}</span>
            </Link>
            <span className='date'>1 min ago</span>
          </div>
        </div>
        <MoreHorizIcon/>
      </div>

      <div className="content">
        <p>{post.description}</p>
        <img src={post.img} alt="" />
      </div>
      <div className="info">
        <div className="item">
          {liked ? <FavoriteIcon/>:<FavoriteBorderIcon/> }
          12 likes
        </div>

        <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
          12 comments
          <TextsmsIcon/>
        </div>


        <div className="item">
          <ShareIcon/>
        </div>

      </div>

      {commentOpen && <Comments/>}
      </div>

    </div>
  )
}

export default Post
