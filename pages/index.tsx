import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import '../styles/main.scss'

const Home = () => (
  <div>
    <Head>
      <title>Antive</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Hero>
      <Eyes>👀</Eyes>
    </Hero>

    <style jsx>{`
      body {
        background-color: #000;
      }
      .hero {
        width: 100%;
        color: black;
      }
      .eyes {
        align-self: center;
      }
    `}</style>
  </div>
)

const Eyes = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 7.5rem;
  transform: translate(-50%, -50%);
`

const Hero = styled.div`
  background: black;
  width: 100vw;
  height: 100vh;
`

export default Home
