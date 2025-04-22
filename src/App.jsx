import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Banner from './components/Banner.jsx'
import Tabs from './components/Tabs.jsx'
import ExclusiveGames from './components/ExclusiveGames.jsx'
import AllProvider from './components/AllProvider.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Banner />   
      <div className='px-4 container-inner'>
        <Tabs />
        <ExclusiveGames />
        <AllProvider />
      </div>
      <Footer />
    </>
  )
}

export default App
