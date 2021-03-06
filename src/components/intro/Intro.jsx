import './intro.scss';
import { useEffect, useRef } from 'react';
import { init } from 'ityped';

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 60,
      strings: ['React', 'Node.js', 'Swift','React Native', 'Python' ],
    })
  }, [])

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Alejandro Pascuale</h1>
          <h3>Full Stack Developer <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio" className='down'>
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
