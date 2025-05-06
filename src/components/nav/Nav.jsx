import './nav.css' 
import {Link} from 'react-router-dom'

// Fake Api Data....
import CurrentUser from '../../FackApis/CurrentUserData'

  // Components........ 
import DarkMode from '../darkmode/DarkMode'

// FontAwesome Icon.....
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSearch, faUser, faBars, faBell} from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        {/* ....... NavAria Left......  */}
        <div className="nav-left">
        <Link to='/'>
            <h3 className='logo'>NapaExtra</h3>
          </Link>
          <Link to='/'>
            <FontAwesomeIcon icon={faHome}/>
          </Link>
          <Link to='/profile/id'>
            <FontAwesomeIcon icon={faUser}/>
          </Link>
          <div className="Nav-Serchbar">
            <FontAwesomeIcon icon={faSearch}/>
          <input type='search'/>
          </div>
        </div>

        {/* ....... NavAria Right......  */}
        <div className="nav-right">
          <Link to='/chatbox/id'>
            <FontAwesomeIcon icon={faEnvelope}/>
          </Link>
          <Link to='/chatbox/id'>
            <FontAwesomeIcon icon={faBell}/>
          </Link>
          <DarkMode />
          <Link to='/chatbox/id'>
            <FontAwesomeIcon icon={faBars}/>
          </Link>
          <div className="user">
            <img src={CurrentUser.map(user=>(user.ProfieImage))} alt=""/>
            <h4>Beg Joker</h4>
          </div>
          </div>
        </div>

    </nav>
  )
}

export default Nav

