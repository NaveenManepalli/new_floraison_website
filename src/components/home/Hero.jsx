import React, { useEffect } from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"

export const Hero = () => {
  const createShapes = () => {
    const shapes = ['triangle', 'circle', 'square', 'ball'];
    const rainContainer = document.querySelector('.rain');
    for (let i = 0; i < 70; i++) { 
      const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
      const shape = document.createElement('div');
      shape.className = `shape ${shapeType}`;
      shape.style.left = `${Math.random() * 100}%`;
      shape.style.animationDuration = `${Math.random() * 2 + 1}s`;
      rainContainer.appendChild(shape);
    }
  };

  useEffect(() => {
    createShapes();
  }, []);

  return (
    <>
      <section className='hero'>
        <div className='rain'></div>
        {home.map((val, i) => (
          <div className='heroContent'>
            <h3 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h3>
            <h4 className='fontcone' data-aos='fade-right'>
              {val.pro}
            </h4>
            
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`,`${val.post1}`,`${val.post2}`,`${val.post3}`,`${val.post4}`,],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-left'>{val.desc}</p>
            
          </div>
        ))}
      </section>
    </>
  )
}
