import React from 'react'
import UserStory from './UserStory'

//Fack Api.............

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

//Fack Api.............
import StoriesData from '../../FackApis/StoriesData'


//components....

export default function Stories() {
  return (
    <div className='stories'>
        <UserStory/>    

        <Swiper style={{width: 80%}}
        slidePerView={4}
        spaceBetween={10}>
        {  
          
            StoriesData.map(story => (
                <SwiperSlide>
                   <div className="story" key={story.id}>
                        <div className="user">
                        <img src={story.storyProfile} alt="" />
                        </div>
                   </div>
                </SwiperSlide>

            ))
        }
        </Swiper>
    </div>
  )
}
