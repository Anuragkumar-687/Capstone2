import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '/src/firebase'; // adjust path if needed
import './login.css';

export default function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, emailOrUsername, password);
      alert('Login successful!');
      navigate('/'); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login">
      <div className='card'>
        <div className='left'>
          <h2> -<br />NapaExtra <br />-</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id enim animi a laboriosam minima beatae tempora? Voluptatum libero dolorem similique!</p>
          <span>Don't Have An Account?</span>
          <Link to='/signup'>
            <button className='btn btn-primary'>Register</button>
          </Link>
        </div>

        <form className='right' onSubmit={handleLogin}>
          <input
            type='email'
            required
            placeholder='Email'
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
          />
          <input
            type='password'
            required
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' className='btn'>Login</button>

          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}
