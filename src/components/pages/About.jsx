import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";

export const About = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleDownload = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClick = (id, url, filename) => {
    setClickedButton(id);
    handleDownload(url, filename);
    setTimeout(() => {
      setClickedButton(null);
    }, 300); // Change color back after 300ms
  };

  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val, index) => (
            <React.Fragment key={index}>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Us' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button
                  className={`primaryBtn ${clickedButton === `primary-${index}` ? "clicked" : ""}`}
                  onClick={() => handleClick(`primary-${index}`, val.PDF, 'Company-Brochure.pdf')}
                >
                  Download-Brochure
                </button>
                <button
                  className={`secondaryBtn ${clickedButton === `secondary-${index}` ? "clicked" : ""}`}
                  onClick={() => handleClick(`secondary-${index}`, val.PF, 'Company-Details.pdf')}
                >
                  Company-Details
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};
