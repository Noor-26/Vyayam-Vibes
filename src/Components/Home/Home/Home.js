import React from 'react'
import { Helmet } from 'react-helmet'
import Benefit from '../Benefits/Benefit'
import Details from '../Details/Details'
import Header from '../Header/Header'
import Review from '../Review/Review'
import Summary from '../Summary/Summary'

function Home() {
  return (
    <div>
         <Helmet>
      <title>Home - Vyayam Vibes</title>
      </Helmet>
      <Header/>
      <Details/>
      <Summary/>
      <Benefit/>
      <Review/>
    </div>
  )
}

export default Home