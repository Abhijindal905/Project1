import React from 'react'
import Navbar from './components/Navbar'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div>
      <Navbar />
      <Container>
        <h1>Welcome to eccommerce site</h1>
      </Container>
      <Footer />
    </div>
    
    </>
  )
}

export default App