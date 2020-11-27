import React, { Fragment, useState } from "react";
import 'regenerator-runtime/runtime'
import { Link } from "react-router-dom"
import { toast } from "react-toastify";
import '../styles/Register.css';

const Register = ({setAuth}) => {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    passwordCopy: "",
    name: ""
  })

  const {email, password, name, passwordCopy} = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

    const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch(
        "http://localhost:5000/auth/register",
        {
          method: "POST",
          headers: {"Content-type": "application/json"},
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Register Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
const inputProps = {
  placeholder: 'Password',
  className: 'form-control my-3'
}
const numberCheck = () => {
    const matches = inputs.password.match(/\d+/g)
  if (matches != null) {
    return true
  }
}
const passwordsMatch = () => {
  if(inputs.password !== "" && inputs.passwordCopy !== "" && inputs.password === inputs.passwordCopy) {
    return true;
  }
}
  return (
    <section id='registerPage'>
      <br/>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h1 className="headerLogo">Habitapp</h1>
      </Link>
      <hr id='register'/>
      <form id='registerForm' onSubmit ={onSubmitForm}>
        <section id='formSection'>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            placeholder="Type your email"
            onChange={e => onChange(e)}
            autoFocus
            autoComplete="off"
          />
        
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            placeholder="Type your password"
            onChange={e => onChange(e)}
          />

          <label htmlFor="retypePassword">Re-type Password</label>
          <input
          id="retypePassword"
          type='password'
          name='passwordCopy'
          value={passwordCopy}
          placeholder='Re-type your password'
          onChange={e => onChange(e)}
          />

          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            placeholder="Type your name"
            onChange={e => onChange(e)}
            autoComplete="off"
            />

          <button id='registerSubmit' className='submitButtons' disabled={inputs.password.length > 7 && numberCheck() && passwordsMatch() ? false : true}>Register</button>
        </section>
        <section id='formRequirements'>
          <label>Requirements:</label>
          <ul>
            <li><div style={{ color: `${inputs.password.length > 7 ? `var(--desatTurq)` : 'red'}`}}>Password must contain at least 8 characters</div></li>
            <li><div style={{ color: `${numberCheck() ? `var(--desatTurq)` : 'red'}`}}>Password must contain a number</div></li>
            <li><div style={{ color: `${passwordsMatch() ? `var(--desatTurq)` : 'red'}`}}>Passwords must match</div></li>
          </ul>
          <hr id="registerLine" />
          <Link to="/login">Already a user? Sign in here</Link>
        </section>
      </form>
    </section>
  );
};

export default Register;
