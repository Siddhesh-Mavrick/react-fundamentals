import React from 'react'
import '../style/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/data">Data</Link>
    </nav>
  )
}

export default Header