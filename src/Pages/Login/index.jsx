import logo from '../../assets/logo.png'
import { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './index.css'

function Login() {
    const navigate = useNavigate();
    const emailREf = useRef(null);
    const passRef = useRef(null);
  
  
    const validate = () => {
      if (!emailREf.current.value) {
        alert('emailingizni kiriting');
        emailREf.current.focus();
        return false;
      }
      if (!passRef.current.value) {
        alert('Parolingizni kiriting');
        passRef.current.focus();
        return false;
      }
      return true;
    }
  
    function hanldeCLlok(e) {
      e.preventDefault()
      const isValid = validate();
      const storedUserJSON = localStorage.getItem("user");
      const storedUser = JSON.parse(storedUserJSON);
      if (isValid) {
       

    if (storedUserJSON) {

      const enteredEmail = emailREf.current.value;
      const enteredPassword = passRef.current.value;
      console.log(enteredEmail);
      console.log(enteredPassword);

      const storedEmail = storedUser.email;
      const storedPassword = storedUser.pass;
      console.log(storedPassword);
      console.log(storedEmail);

      if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
        navigate("/home");
      } else {
        alert("Email yoki password Notog'ri");
      }
    } 


      }
      emailREf.current.value = null
      passRef.current.value = null
  
  
    }
    
    function handleGoogle (e) {
        e.preventDefault();
    }
    return (
        <>
          <section className='container'>
            <form className='form'>
              <h1>Welcome back!</h1>
              <label htmlFor="email">Email</label>
              <i className="fa-regular fa-envelope user__email"></i>
              <input ref={emailREf} type="emial" id='email' placeholder='example@site.com' />
              <label htmlFor="pas">Choose Password</label>
              <i className="fa-solid fa-lock user__pass"></i>
              <input ref={passRef} type="password" id='pas' placeholder='Minimum 8 characters' />
              <button onClick={hanldeCLlok} className='button-'>Sign Up</button>
              <button onClick={handleGoogle} className='button-hover'><img src={logo} alt="google icon" />Login with Google</button>
              <h4>or login with SSO</h4>
              <NavLink className='navlink' to='/'>Register</NavLink>
            </form>
          </section>
        </>
      )
}

export default Login
