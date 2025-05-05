import './login.css'

export default function  login() {
  return (
    <div className="login">
       <div className='card'>
      <div className='left'>
        <h2>NapaExtra <br/>-</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id enim animi a laboriosam minima beatae tempora? Voluptatum libero dolorem similique!</p>
        <span>Don't Have An Account?</span>
        <button className='btn btn-primary'>Register</button>
      </div>
      <form className='right'>
        <input type='text' required placeholder='username'/>
        <input type='password' required placeholder='password'/>
        <button type='submit' className='btn'>Login</button>

      </form>
    
    </div>
    </div>
  )
}

