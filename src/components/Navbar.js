import { Link } from "react-router-dom";

const Navbar = ({ price }) => {
  return (
    <div className='navbar'>
      <ul>
        <div className='nav'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/favorites'>
            <li>Favorites</li>
          </Link>
        </div>
        <div className='nav'>
          <Link to='/cart'>
            <li>Cart</li>
          </Link>
          <li>Total: {price}</li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
