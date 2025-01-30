import React from 'react'
import './feeds.css'

//Components............

import Feed from './Feed'

//Fack Api.............
import HomeFeed Data from '../../FackApis/HomeFeed Data'

export default function Feeds() {
  return (
    <div className='feeds'>
        {
            FeedsData.map((feed) => (
                <Feed key={feed.id} feed={feed} /> 
            ))
        }
    </div>
  )
}
