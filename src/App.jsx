import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Tabs from './components/Tabs';
import ExclusiveGames from './components/ExclusiveGames';
import AllProvider from './components/AllProvider';
import './App.css';;

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
