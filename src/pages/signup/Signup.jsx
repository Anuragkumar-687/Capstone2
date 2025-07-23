import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '/src/firebase';
import './signup.css';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // initialize navigate

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User registered successfully!');
      navigate('/'); // redirect after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup">
      <div className='card'>
        <div className='left'>
          <h2> -<br/>NapaExtra Signup<br/>-</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id enim animi a laboriosam minima beatae tempora? Voluptatum libero dolorem similique!</p>
          <span>Have An Account?</span>
          <Link to='/login'>
            <button className='btn btn-primary'>Login</button>
          </Link>
        </div>

        <form className='right' onSubmit={handleSignup}>
          <input
            type='text'
            required
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='email'
            required
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            required
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' className='btn'>Register</button>

          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}
