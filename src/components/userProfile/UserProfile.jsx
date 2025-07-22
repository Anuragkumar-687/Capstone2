import './UserProfile.css';
import {Link} from 'react-router-dom';

// FontAwesome icon.... 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faFeed } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

// FackApi..... 
import CurrentUserData from '../../FackApis/CurrentUserData';

function UserProfile() {
  return (
    <div className='userProfile'>
        <div className="cover-photos">
            <img src={CurrentUserData.map(user=>(user.CoverPhoto))} alt='' />
        </div>
        <div className="profile-info">
            <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt=''/>
            <div className="user-name">
                <h3>{CurrentUserData.map(user=>(user.name))}</h3>
                <h5>{CurrentUserData.map(user=>(user.username))}</h5>
            </div>
            <div className="profile-button">
                <Link to='/chatbox/id'> 
                    <button className='btn btn-primary'>
                        <FontAwesomeIcon icon={faMessage} />
                    </button>
                </Link>
                <button className='btn btn-primary'> 
                    <FontAwesomeIcon icon={faFeed} /> Follow Me
                </button>
                <button className='btn'>
                    <FontAwesomeIcon icon={faLink} /> 
                    Add Friend
                </button>
            </div>
            <div className="bio">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit necessitatibus fugiat sapiente esse, tempore distinctio facere neque sed unde. Facilis.      
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default UserProfile
