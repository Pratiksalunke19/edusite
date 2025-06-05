import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programmes from './Components/Programmes/Programmes'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

function App() {


  const [videoOn,setVideoOn] = useState(false)

  return(
    <div>
        <Navbar/>
        <Hero/>
        <div className='container'>
          <Title subTitle='Our PROGRAM' title='What We Offer'/>
          <Programmes/>
          <About setVideoOn={setVideoOn}/>
          <Title subTitle='Gallery' title='Campus Photos'/>
          <Campus/>
          <Title subTitle='TESTIMONIALS' title='What Student Says'/>
          <Testimonials/>
          <Title subTitle='Contact Us' title='Get in Touch'/>
          <Contact/>
        <Footer/>
        </div>
        <VideoPlayer videoOn={videoOn} setVideoOn={setVideoOn}/>
    </div>
  )
}

export default App
