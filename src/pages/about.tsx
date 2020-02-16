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
    <Layout>
      <SEO title="About | Nieke Tebeest" desc="Hi. I'm LekoArts! You can visit my website or my other Gatsby projects." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi, my name is Nieke Tebeest</h1>
        <p>I'm a 28-year old Digital & Production Designer based in London. I’ve been doing digital design for 6 years, starting out in web, then branching out to digital film marketing. Recently I’ve moved into production design and the world of print.</p>
        <p>I spend most of my working time in Photoshop and InDesign, and dabble in After Effects.</p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
