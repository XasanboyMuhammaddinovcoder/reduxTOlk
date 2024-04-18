import logo from '../../assets/logo.png'
import {  useRef } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../../redux/userSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import './index.css'

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const emailREf = useRef(null);
  const passRef = useRef(null);



  const validate = () => {
    if (!nameRef.current.value) {
      alert('Ismingizni kiriting');
      nameRef.current.focus();
      return false;
    }
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
    if (isValid) {
      const user = {
        name: nameRef.current.value,
        email: emailREf.current.value,
        pass: passRef.current.value
      }
      const userJSON = JSON.stringify(user);
      localStorage.setItem("user", userJSON);
      dispatch(add(user));
      navigate('/login')
      nameRef.current.value = null
      emailREf.current.value = null
      passRef.current.value = null

    }

  }
  function handleGoogle(e) {
    e.preventDefault();
  }


  return (
    <>
      <section className='container'>
        <form className='form'>
          <h1>Let’s go!</h1>
          <label htmlFor="name">Full Name</label>
          <i className="fa-regular fa-user user"></i>
          <input ref={nameRef} id='name' type="text" placeholder='John Doe' />
          <label htmlFor="email">Email</label>
          <i className="fa-regular fa-envelope user__email"></i>
          <input ref={emailREf} type="emial" id='email' placeholder='example@site.com' />
          <label htmlFor="pas">Choose Password</label>
          <i className="fa-solid fa-lock user__pass"></i>
          <input ref={passRef} type="password" id='pas' placeholder='Minimum 8 characters' />
          <button onClick={hanldeCLlok} className='button-'>Sign Up</button>
          <button onClick={handleGoogle} className='button-hover'><img src={logo} alt="google icon" />Sign Up with Google</button>
          <h4>or login with SSO</h4>
          <p>By lobby the button above, you agree to our Terms of Service and Privacy Policy.</p>
          <NavLink className='navlink' to='/login'>Login</NavLink>
        </form>
      </section>
    </>
  )
}

export default Register
