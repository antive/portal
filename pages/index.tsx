import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import '../styles/main.scss'

const FlareComponent: any = dynamic(() => import('flare-react'), {
  ssr: false
})

const Home = () => (
  <main>
    <Head>
      <title>Antive</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Eyes>
      <FlareComponent
        width={420}
        height={420}
        animationName="Untitled"
        file="/curious-eyes.flr"
        transparent={true}
      />
    </Eyes>

    <Caption>Careful, he is watching.</Caption>

    <Footer>Antive | 2020</Footer>

    <style jsx>{`
      body {
        background-color: #000;
      }

      main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    `}</style>
  </main>
)

const Caption = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-size: 3rem;
  color: white;
  text-align: center;
`

const Eyes = styled.div`
  margin: 0 auto;
`

const Footer = styled.footer`
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
  color: grey;
  text-align: center;
`

export default Home
