import './stories.css'

// FackApis...... 
import CurrentUserData from '../../FackApis/CurrentUserData'

// FontAwesomeIcon........ 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

export default function UserStory() {
  return (
    <div className='story userStory'>
      <div className="user">
        <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
            </div>
                <img src={CurrentUserData.map(user=>(user.CoverPhoto)) } alt="" />
                <label htmlFor='storyFiles'>
                    <FontAwesomeIcon icon={faAdd}/>
                    <imput type="File" id="storyFiles"/>
                </label>
                <h5>Add Story</h5>
            </div>
  )
}

