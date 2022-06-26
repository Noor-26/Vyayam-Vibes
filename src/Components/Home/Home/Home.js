import React from 'react'
import Benefit from '../Benefits/Benefit'
import Details from '../Details/Details'
import Header from '../Header/Header'
import Review from '../Review/Review'
import Summary from '../Summary/Summary'

function Home() {
  return (
    <div>
      <Header/>
      <Details/>
      <Summary/>
      <Benefit/>
      <Review/>
    </div>
  )
}

export default Home