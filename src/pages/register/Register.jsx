import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
  return (
    <div className='register'>
      <div className='card'>
        <div className="left">
          <h1>Welcome to Register</h1>
          <p>Get in touch with all your friends, family and close ones in your life,
            let them know who your are.
          </p>
          <span>Have already an account?</span>
          <Link to={'/login'}><button>Login</button></Link>
        </div>
        <div className="right">
          <h1>Create Account</h1>
          <form action="">
            <input type="text" name="txt_name" id="txt_name" placeholder='Name'/>
            <input type="text" name="txt_lastname" id="txt_lastname" placeholder='LastName'/>

            <input type="text" name="txt_usern" id="txt_usern" placeholder='Username'/>
            <input type="email" name="txt_email" id="txt_email" placeholder='example@hotmail.com'/>
            <input type="date" name="txt_date" id="txt_date"/>
            <input type="password" name="txt_pass" id="txt_pass" placeholder='Password'/>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register

