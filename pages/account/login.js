import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import AuthContext from '@/context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, error } = useContext(AuthContext);

  useEffect(() => error);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="login">
      <div className="login__left">
        <div className="login__left__nav">
          <Link href="/">
            <img src="/images/nav-logo.svg" alt="" className="login__left__nav__logo" />
          </Link>
        </div>

        <form className="login__left__form" onSubmit={handleSubmit}>
          <h3>Admin Login</h3>
          <p>Please input your details in order to access the admin dashboard for Dear Potential</p>
          <hr />
          <div className="login__left__form__main">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="input"
              placeholder="mail@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="input"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button role="button" type="submit" value="Login">
            Login
          </button>
          <h5>
            Go back{' '}
            <Link href="/">
              <span> home</span>
            </Link>
          </h5>
        </form>
      </div>
      <div className="login__image"></div>
    </div>
  );
}
