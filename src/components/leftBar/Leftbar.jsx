import './leftbar.scss'
import Friend from '../../assets/1.png'
import Group from '../../assets/2.png'
import Marketplace from '../../assets/3.png'
import Watch from '../../assets/4.png'
import Memories from '../../assets/5.png'
import Events from '../../assets/6.png'
import Games from '../../assets/7.png'
import Photos from '../../assets/8.png'
import Videos from '../../assets/9.png'
import Messages from '../../assets/10.png'
import Tutorials from '../../assets/11.png'
import Courses from '../../assets/12.png'
import Fund from '../../assets/13.png'
import { Message } from '@mui/icons-material'

const Leftbar = () => {
  return (
    <div className='leftbar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile"/>
            <span>Jose Luis</span>
          </div>

          <div className="item">
            <img src={Friend} alt="" />
            <span>Friends</span>
          </div>

          <div className="item">
            <img src={Group} alt="" />
            <span>Groups</span>
          </div>

          <div className="item">
            <img src={Marketplace} alt="" />
            <span>Marketplace</span>
          </div>

          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>                                
        </div>
        <hr />

        <div className="menu">
          <span>Your Shortcuts</span>

          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>

          <div className="item">
            <img src={Games} alt="" />
            <span>Games</span>
          </div>

          <div className="item">
            <img src={Photos} alt="" />
            <span>Photos</span>
          </div>

          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>

          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Others</span>

          <div className="item">
            <img src={Fund} alt="" />
            <span>Fund</span>
          </div>

          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>

          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Leftbar
