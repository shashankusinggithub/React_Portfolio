import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['h', 'a', 's', 'h', 'a', 'n', 'k']
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    '-',
    'S',    
    't',
    'a',
    'c',
    'k',
  ]
   const Developer=[ 'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={Developer}
              idx={22}
            />
          </h1>
          <h2>Hack-On 2022 Winner / JavaScript Expert / Python Developer</h2>

          
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <Link to="/Resume/Shashank's Resume.pdf" className="flat-button" target="_blank" download>
            DOWNLOAD RESUME
          </Link>
          {/* <a href="https://drive.google.com/file/d/1Udwr6GF3XzewJ7HX5CNl6VN1LSoPzifg/view" className="flat-button">
            DOWNLOAD RESUME
          </a> */}
        </div>
        <div className='logobig'><Logo /></div>
            
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
