import './feeds.css'

// Components........
import Feed from './Feed'

// Fack Api...... 
import HomeFeedData from '../../FackApis/HomeFeedData'

function Feeds() {
  return (
    <div>
      <div className="feeds">
        {
            HomeFeedData.map(fed=>(
                <Feed fed={fed} key={fed.key} />
            ))
        }
      </div>
    </div>
  )
}

export default Feeds
