import React from 'react'
import './home.css'

//components....
import Stories from '../../components/stories/Stories'
import AddPost from '../../components/addPost/AddPost'


export default function Home(){
  return (
    <>
        <Stories />
        <AddPost />  
    </>
  )
}