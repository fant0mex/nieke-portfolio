import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout color="#29313f">
      <SEO title="About | Nieke Tebeest" desc="Hi. I'm LekoArts! You can visit my website or my other Gatsby projects." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi, my name is Nieke Tebeest</h1>
        <p>I'm a Dutch, 28-year old Digital & Production Designer currently working for the Creative Partnership in London. I’ve been in digital design for 6 years starting out in web, then branching out to digital film marketing. Recently I’ve moved into production design and the world of print. I spend most of my working time in Photoshop and InDesign, dabble in After Effects and the occasional Social Media Marketing brief.</p>
        <p>I finished my Communication & Media Design (First Bachelor Communication) in 2013 at Hogeschool Utrecht.</p>
        <p>A lot of my free time is spent in the cinema, cooking, Cross-Fitting and making the occasional cosplay. I love to travel and make a yearly trip to the Alps to keep up with skiing which I did to amateur level (Slalom) between age 9-19. I’ve recently started competing in CrossFit to keep up with my competitive spirit.</p>
        <p>Get in touch at: <a href="mailto:nieke@beyondbelieving.net">nieke@beyondbelieving.net</a></p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
