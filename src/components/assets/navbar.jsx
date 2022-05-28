import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [nav, setNav] = useState([{path: '/', text: 'Все котики'}, {path: '/likesCats', text: 'Любимые котики'}]);
  const [ind, setInd] = useState(0);
  
    return (
        <nav>
        <div className="nav-wrapper  blue darken-1">
          <ul className="">
            {nav.map((elem, index) => (
              <li key={elem.path} onClick={() => setInd(index)}  className={index === ind ? 'active' : ''} >
              <Link to={elem.path}>{elem.text}</Link>
                
              </li>
            ))}
           
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
