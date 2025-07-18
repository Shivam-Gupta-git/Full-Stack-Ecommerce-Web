import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
import Subscribe from '../components/subscribe'

function Home() {
  return (
    <>
    <Hero></Hero>
    <LatestCollection></LatestCollection>
    <BestSeller></BestSeller>
    <Policy></Policy>
    <Subscribe></Subscribe>
    </>
  )
}

export default Home