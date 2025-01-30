import React from 'react'
import './home.css'

//components....
import Stories from '../../components/stories/Stories'
import AddPost from '../../components/addPost/AddPost'

//Fack Api.............
import CurrentUserData from '../../FackApis/CurrentUserData'

//Font Awesome Icons............
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home(){
  return (
    <>
        <Stories />
        <AddPost />  
    </>
  )
}