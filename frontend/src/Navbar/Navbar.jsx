import React from 'react'
import { Link } from 'react-router-dom' 

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/team">team</Link></li>
      </ul>
    </nav>
  )
}
