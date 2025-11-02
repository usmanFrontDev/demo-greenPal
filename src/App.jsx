import React from 'react'
import Header from './components/Header'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page5 from './Pages/Page5'
import Page6 from './Pages/Page6'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full h-full'>
      <Header/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Footer/>
    </div>
  )
}

export default App