import { useEffect, useState } from 'react'
import {
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
  faLinux,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faLinux} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Highly skilled and results-driven full-stack developer with a proven
            track record in web application development. Experienced in
            front-end and back-end technologies, delivering high-quality
            solutions. Seeking a challenging role in the technology industry to
            utilize expertise in driving innovation and achieving business
            objectives. Recognized for spearheading the successful development
            of a complex e-commerce platform, integrating front-end and back-end
            systems. Proficient in HTML, CSS, JavaScript, and frameworks like
            React and Node.js. Committed to continuous learning and staying
            updated with emerging technologies to deliver cutting-edge solutions
            that optimize user experiences. Ready to contribute to a
            collaborative and dynamic team environment.
            <dl>
              <h3>Skills</h3>
              <dt>
                <b>Programing Languages</b>
              </dt>
              <dd>Python | JavaScript </dd>
              <dt>
                <b>Front End Technologies</b>
              </dt>
              <dd> React.js | HTML | CSS | JavaScript | Redux</dd>
              <dt>
                <b>Back End Technologies</b>
              </dt>
              <dd>
                {' '}
                SQL | Node.js | MongoDB | Express.js | Jest | Elasticsearch
                Engine | Redis{' '}
              </dd>
            </dl>
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
