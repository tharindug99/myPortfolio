import React from 'react'
import Banner from '../components/header/Banner'
import MyAchievements from '../components/header/MyAchievements'
import NewSkills from '../components/header/NewSkills'
import Contact from './Contact'
import heroimg from '../components/images/Tharindu.jpg'
import Footer from '../components/footer'
import MySkills from '../components/skills/MySkills'

export default function Home() {
  return (
    <div  className="mx-auto max-w-full w-full bg-fixed relative align-center "
          style={{
      backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(${heroimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',
    }}>
    <Banner/>
    <NewSkills/>
    <MyAchievements/>
    <Contact/>
    
    </div>
  )
}
