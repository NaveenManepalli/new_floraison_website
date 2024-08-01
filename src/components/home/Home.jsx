import React from "react"
import { About } from "../pages/About"
import { Contact } from "../pages/Contact"

import { Portfolio } from "../pages/Portfolio"
import { Services } from "../pages/Services"
import {TeamMembers } from "../pages/Testimonials"
import { Hero } from "./Hero"

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />

      <Portfolio />
      <TeamMembers />
      <Contact />
    </>
  )
}
