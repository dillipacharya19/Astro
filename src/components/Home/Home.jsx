import React from 'react'
import Body from './Body'
import Export from './Export'
import Appointment from './Appointment'
import Horoscope from './Horoscope'
import AboutMe from './AboutMe'
import Popular from './Popular'
import Problem from './Problem'
import Feedback from './Feedback'
import Questions from './Questions'

const Home = () => {
  return (
    <div className=' bg-gray-100'>
        <Body/>
        <Export/>
        <Appointment/>
        <Horoscope/>
       <AboutMe/>
       <Popular/>
       <Problem/>
       <Feedback/>
       <Questions/>
    </div>
  )
}

export default Home