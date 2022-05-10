import { useState } from 'react';
import {
  checkUserExistence,
  addNewUser,
  isValidUserForSignIn,
} from '../../../functions';
import './login.css';
const Login = ({ setAuth }) => {
  const [toggle, setToggle] = useState(false);
  const [errToggle, setErrToggle] = useState(false);
  const [errMessage, setErrMessage] = useState('Wrong credentials!');

  // handlers
  const handleSignUp = (e) => {
    e.preventDefault();
    const signUpForm = new FormData(e.target);
    const name = signUpForm.get('name');
    const password = signUpForm.get('password');
    const email = signUpForm.get('email');
    const phone = signUpForm.get('phone');
    const profession = signUpForm.get('profession');

    const signUpData = {
      name,
      password,
      email,
      phone,
      profession,
    };
    const isUserPreExisting = checkUserExistence(name, email);
    if (isUserPreExisting) {
      setErrMessage('name or email already taken!');
      setErrToggle(true);
      setTimeout(() => setErrToggle(false), 1500);
    } else {
      // console.log('signup successful!');
      addNewUser(signUpData);
      setAuth((auth) => !auth);
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const signInForm = new FormData(e.target);
    const name = signInForm.get('username');
    const password = signInForm.get('pass');
    if (isValidUserForSignIn(name, password)) {
      // console.log('signin successful!!!');
      setAuth((auth) => !auth);
    } else {
      setErrMessage('Wrong credentials!');
      setErrToggle(true);
      setTimeout(() => setErrToggle(false), 1500);
    }
  };

  return (
    <div className="wrapper">
      {!toggle ? (
        <h1 className="form__title">Sign Up</h1>
      ) : (
        <h1 className="form__title">Sign In</h1>
      )}
      <p className={!errToggle ? 'error__text display-hide' : 'error__text '}>
        {errMessage}
      </p>
      <div className="form__wrapper">
        {!toggle ? (
          <form
            className="form signup"
            onSubmit={(e) => {
              handleSignUp(e);
            }}
          >
            <div className="form__item">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                name="name"
                id="name"
                required={true}
                placeholder="john doe ..."
              />
            </div>
            <div className="form__item">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                required={true}
                name="password"
                id="password"
              />
            </div>
            <div className="form__item">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                name="email"
                id="email"
                required={true}
                placeholder="example@abc.xyz"
              />
            </div>
            <div className="form__item">
              <label htmlFor="phone">Phone Number *</label>
              <input type="text" name="phone" required={true} id="phone" />
            </div>
            <div className="form__item">
              <label htmlFor="profession">Profession</label>
              <select name="profession" id="profession">
                <option value="software developer">Software developer</option>
                <option value="hr">HR</option>
                <option value="frontend developer">Front end Developer</option>
                <option value="backend developer">Backend developer</option>
              </select>
            </div>
            <input type="submit" className="btn btn-primary" value="Sign Up" />
            <p className="under__text">
              Already have an account ?{' '}
              <span className="link" onClick={() => setToggle(!toggle)}>
                Sign In
              </span>
            </p>
          </form>
        ) : (
          <form className="form signin" onSubmit={(e) => handleSignIn(e)}>
            <div className="form__item">
              <label htmlFor="username">Name *</label>
              <input
                type="text"
                name="username"
                id="username"
                required={true}
                placeholder="john doe"
              />
            </div>
            <div className="form__item">
              <label htmlFor="pass">Password *</label>
              <input type="password" required={true} name="pass" id="pass" />
            </div>

            <input type="submit" className="btn btn-primary" value="Sign In" />
            <p className="under__text">
              Need a new account ?{' '}
              <span className="link" onClick={() => setToggle(!toggle)}>
                Sign Up
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
