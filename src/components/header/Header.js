import './Header.css';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div id="header">
            <ul id="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/band">Band</Link></li>
                <li><Link to="/tour">Tour</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>
                    <a href="#">
                        More
                        <i className="ti-angle-down arrow-down"></i>
                    </a>
                    <ul className="subnav">
                        <li><a href="#">Merchandise</a></li>
                        <li><a href="#">Extra</a></li>
                        <li><a href="#">Media</a></li>
                    </ul>
                </li>
            </ul>
            <div id="search">
                <i className="ti-search search-bottom"></i>
            </div>
        </div>
    )
}

export default Header