import React from 'react'
import './stories.css'

//Fack Api.............

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

//Fack Api.............
import StoriesData from '../../FackApis/StoriesData'


//components....
import UserStory from './UserStory'

export default function Stories() {
  return (
    <div className='stories'>
        <UserStory/>    

        <Swiper style={{width:'80%'}}
        slidesPerView={4}
        spaceBetween={10}>
        
        {  
            StoriesData.map(story => (
                <SwiperSlide>
                   <div className="story" key={story.id}>
                        <div className="user">
                        <img src={story.storyProfile} alt="" />
                        </div>
                        <img src={story.story} alt="" />
                        <h5>{story.name}</h5>
                   </div>
                </SwiperSlide>
            ))
        }
        </Swiper>
    </div>
  )
}
