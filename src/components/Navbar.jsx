import { useState } from 'react';

const Navbar = ({ setAuth }) => {
  const [togg, setTogg] = useState(false);

  return (
    <nav>
      <li className="company__details" onClick={() => setTogg(!togg)}>
        Company Info
      </li>
      <div className={togg ? 'details' : ' display-hide'}>
        <li>
          <strong>Company: </strong>Geeksynergy Technologies Pvt Ltd
        </li>
        <li>
          <strong>Address:</strong> Sanjayanagar, Bengaluru-56
        </li>
        <li>
          <strong>Phone: </strong>
          XXXXXXXXX09
        </li>
        <li>
          <strong>Email: </strong> XXXXXX@gmail.com
        </li>
      </div>
      <li className="btn btn-danger" onClick={() => setAuth(false)}>
        Log out
      </li>
    </nav>
  );
};

export default Navbar;
