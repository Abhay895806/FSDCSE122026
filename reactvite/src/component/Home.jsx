import React from 'react'
import { Link, Outlet} from 'react-router-dom'

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Registeraton</a></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Home