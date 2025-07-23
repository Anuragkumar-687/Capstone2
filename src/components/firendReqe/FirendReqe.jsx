import './firendReqe.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Fake Apis
import FirendReqData from '../../FackApis/FirendReqData';

export default function FirendReqe() {
  const [requests, setRequests] = useState(FirendReqData);  
  const [friends, setFriends] = useState([]);             

  const handleAccept = (friend) => {
    setFriends((prev) => [...prev, friend]);
    setRequests((prev) => prev.filter((req) => req.id !== friend.id));
  };

  const handleDelete = (friendId) => {
    setRequests((prev) => prev.filter((req) => req.id !== friendId));
  };

  return (
    <div className='Firend-Requests'>
      <h4>Friend Requests</h4>

      {requests.length === 0 && <p>No new friend requests</p>}

      {requests.map((friend) => (
        <div className="request" key={friend.id}>
          <Link to={`/profile/${friend.id}`}>
            <div className="info">
              <div className="user">
                <img src={friend.img} alt="" />
                <h5>{friend.name}</h5>
              </div>
              <div className="info-name">
                <p>{friend.info}</p>
              </div>
            </div>
          </Link>

          <div className="action">
            <button
              className='btn btn-primary'
              onClick={() => handleAccept(friend)}
            >
              Accept
            </button>
            <button
              className='btn btn-red'
              onClick={() => handleDelete(friend.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <hr />

      <h4>My Friends</h4>
      {friends.length === 0 && <p>You have no friends yet</p>}
      <div className="friends-list">
        {friends.map((friend) => (
          <div className="friend" key={friend.id}>
            <img src={friend.img} alt="" />
            <h5>{friend.name}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}