
import { Link } from 'react-router-dom'

function Home() {
  
 


  return (
    <>
    <h1>Login as </h1><Link to="/Register"><button>Student</button></Link><Link to="/Register"><button>Teacher</button></Link>
    </>
  ) 
}

export default Home
