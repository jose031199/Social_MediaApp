import './profile.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../components/posts/Posts'

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img className='cover' src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img className='profilePict' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>

      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookIcon fontSize='large'/>
            </a>

            <a href="http://instragam.com">
              <InstagramIcon fontSize='large'/>
            </a>

            <a href="http://twitter.com">
              <TwitterIcon fontSize='large'/>
            </a>

            <a href="http://linkedin.com">
              <LinkedInIcon fontSize='large'/>
            </a>

          </div>

          <div className="center">
            <span>Jose Gonzalez</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>Mexico</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>Spanish</span>
              </div>
            </div>
            <button>Follow</button>

          </div>

          <div className="right">
            <EmailIcon/>
            <MoreVertIcon/>
          </div>

        </div>
        <Posts/>
      </div>

    </div>
  )
}

export default Profile
