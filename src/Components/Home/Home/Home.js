import React from 'react'
import Benefit from '../Benefits/Benefit'
import Details from '../Details/Details'
import Header from '../Header/Header'
import Summary from '../Summary/Summary'

function Home() {
  return (
    <div>
      <Header/>
      <Details/>
      <Summary/>
      <Benefit/>
    </div>
  )
}

export default Home