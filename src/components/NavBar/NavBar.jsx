import { Link } from "react-router-dom"

const NavBar = () => {
  return ( 
    <header>
      <nav>
        <Link 
        to='/starships'
        >
          <p>
            <h1>STAR WARS STARSHIPS</h1>
          </p>
        </Link>
      </nav>
    </header> 
  )
}

export default NavBar