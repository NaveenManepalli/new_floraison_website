import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <footer>
      {social.map((item, index) => (
        <a href={item.url} key={index} target="_blank" rel="noopener noreferrer">
          <i data-aos='zoom-in'>{item.icon}</i>
        </a>
      ))}
      <p data-aos='zoom-in'>All Right Reserved 2024</p>
    </footer>
  )
}

export default Footer
