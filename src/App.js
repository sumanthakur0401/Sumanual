import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/about'
import Layout from './components/Layout/layout'
import Portfolio from './components/Portfolio/portfolio'
import Snowchild from './components/Projects/Snowchild/snowchild'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}/>
          <Route path="portfolio" element={<Portfolio />}/>
          <Route path='snowchild' element={<Snowchild />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
