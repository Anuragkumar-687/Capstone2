import './firendReqe.css'
import { Link } from 'react-router-dom';

// Fack Apis....... 
import FirendReqData from '../../FackApis/FirendReqData'

export default function FirendReqe() {
  return (
    <div className='Firend-Requests'>
      <h4>Friend Requests</h4>

      {
        FirendReqData.map(firend=>(
          <div className="request">
            <Link to='/profile/id'>
            <div className="info" key={firend.id}>
               <div className="user">
                <img src={firend.img} alt="" />
                <h5>{firend.name}</h5>
               </div>
               <div className="info-name">
                <p>{firend.info}</p>
               </div>
            </div>
            </Link>

            <div className="action">
              <button className='btn btn-primary'>Accept</button>
              <button className='btn btn-red'>Delete</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
