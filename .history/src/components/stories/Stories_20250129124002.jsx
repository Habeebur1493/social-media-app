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
        slidePrevClass={4}
        spaceBetween={10}>
            <SwiperSlide>
                <div className="story">
                    
                </div>
        </Swiper>
    </div>
  )
}
