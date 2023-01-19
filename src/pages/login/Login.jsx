import { Link } from 'react-router-dom'
import './login.scss'
import { AuthContext } from '../../context/authContext'
import { useContext } from 'react'
const Login = () => {

  const {login} = useContext(AuthContext)

  const handleLogin=()=>{
    login();
  }
  return (
    <div className='login'>
      <div className='card'>
        <div className="left">
          <h1>Welcome to Login</h1>
          <p>Get in touch with all your friends, family and close ones in your life,
            let them know who your are.
          </p>
          <span>Don't you have an account ?</span>
          <Link to={'/register'}><button>Register</button></Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" name="txt_name" id="txt_name" placeholder='Username'/>
            <input type="password" name="txt_pass" id="txt_pass" placeholder='Password'/>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
