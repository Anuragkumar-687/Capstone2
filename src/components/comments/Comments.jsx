import './comment.css'
import {Link} from 'react-router-dom'

// Fake Api..... 
import CommetData from '../../FackApis/CommetData'
import CurrentUserData from '../../FackApis/CurrentUserData'

function Comments() {
  return (
    <div className='comments'>
        <div className="writebox">
            <form action="#">
                <div className="user">
                    <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
                    <input type="text" placeholder='Write a comment...' />
                    <submit type= 'submit' className='btn btn-primary'>Send</submit>
                </div>
            </form>
        </div>
        {
            CommetData.map(comment=>(
                <Link to='/profile/id'>
                    <div className="user" key={comment.id}>
                        <img src={comment.commentProfile} alt=''/>
                        <div>
                            <h5>{comment.name}</h5>
                            <p>{comment.CommeText}</p>
                        </div>
                        <small>1h</small>
                    </div>
                </Link>
            ))
        }
      
    </div>
  )
}

export default Comments
