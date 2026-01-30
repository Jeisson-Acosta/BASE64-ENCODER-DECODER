import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout.jsx'
import { Encoder } from './pages/Encoder.jsx'
import { Decoder } from './pages/Decoder.jsx'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/" element={<Encoder />} />
            <Route path="/decoder" element={<Decoder />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  )
}

export default App
