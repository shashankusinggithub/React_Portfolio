import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { Handler } from 'leaflet'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  useEffect(() => {
    let coll = document.getElementsByClassName("collapsible");
    let i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }

  }, [])



  // function clickHandel(){

  //   let coll = document.getElementsByClassName("collapsible");
  //   let i;

  //   for (i = 0; i < coll.length; i++) {
  //     coll[i].addEventListener("click", function () {
  //       this.classList.toggle("active");
  //       var content = this.nextElementSibling;
  //       if (content.style.maxHeight) {
  //         content.style.maxHeight = null;
  //       } else {
  //         content.style.maxHeight = content.scrollHeight + "px";
  //       }
  //     });
  //   }}

  return (
    <>
      <div className="container project-page">
        <div className="text-zone" >
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', '', 'j', 'e', 'c', 't', 's',
              ]}
              idx={15}
            />
          </h1>

          <div >

            <p className='indent'>
              <h3 className='collapsible' >GPS Locations</h3>
              <div className='content'>
                Designed a Full Stack web application to store the GPS data of the devices and provide insights using visualisation of data. <br />
                <b>Link -</b> <a href='https://github.com/shashankusinggithub/GPS_Location'>GITHUB Repository   </a> <span> (Desktop)</span>
                <dl >
                  <h5>Technologies Used -</h5>
                  <dt><b>Front End Technologies</b></dt>
                  <dd> React.js | HTML | CSS | JavaScript</dd>
                  <dt><b>Back End Technologies</b></dt>
                  <dd> Node.js | MySQL | Express.js | Cypress </dd>
                </dl>
              </div>

              <h3 className='collapsible' >Scratch Clone</h3>
              <div className='content'>
                Designed an Interactive Scratch Clone where user can use it to learn coding with visualization,<br />
                <b>Link -</b> <a href='https://scratchclone.netlify.app/'>Scratch Clone   </a> <span> (Desktop)</span>
                <dl >
                  <h5>Technologies Used -</h5>
                  <dt className="dt">Front End Technologies</dt>
                  <dd> React.js | JavaScript | HTML | CSS </dd>
                </dl>
              </div>
              <h3 className='collapsible' >Movies App</h3>
              <div className='content'>
                Designed and deployed a Full stack App.
                <ul className='movies-app'>

                  <li>Which help users to save playlist and share it using the link provided or can keep it private.</li>
                  <li>Using OMDB api to fletch the data.</li>
                  <li>User authentication using JSONwebtoken and encrypting passwords using Bcrypt.</li>
                </ul>

                <b>Link -</b><a href='https://intense-headland-96312.herokuapp.com/'> Movies App </a>
                <dl >
                  <h5>Technologies Used</h5>

                  <dt><b>Front End Technologies</b></dt>
                  <dd> React.js | HTML | CSS | JavaScript</dd>
                  <dt><b>Back End Technologies</b></dt>
                  <dd> Node.js | MongoDB | Express.js </dd>
                </dl>
              </div>
              <h3 className='collapsible' >Monitoring And Controlling of Industrial Parameters</h3>
              <div className='content'>
                <li> Designed an IoT project using Python on Linux based OS (Raspbian) with
                  Ubidots Server.</li><li>Remotely monitor diﬀerent parameters such as gas leakage, over heating
                    of machinery, increase in room temperature and light sensor, and to take
                    appropriate action automatically or manually using UBIDOTS server
                    remotely.</li>


                <dl>
                  <h5>Technologies Used -</h5>

                  <dd> Python | TCP/IP | IoT | Linux </dd>
                </dl>
              </div>

            </p>

          </div>






        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects

