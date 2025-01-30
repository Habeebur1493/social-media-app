import React from 'react'
import './feeds.css'

//Components............

import Feed from './Feed'

//Fack Api.............
import HomeFeedData from '../../FackApis/HomeFeedData'

export default function Feeds() {
  return (
    <div className='feeds'>
        {
            HomeFeedData.map((feed) => (
                <Feed key={feed.id} feed={feed} /> 
            ))
        }
    </div>
  )
}
