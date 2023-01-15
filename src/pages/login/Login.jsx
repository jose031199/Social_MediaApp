import { Link } from 'react-router-dom'
import './login.scss'
const Login = () => {
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
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
