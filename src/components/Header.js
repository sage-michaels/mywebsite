import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Style1.css';


class Header extends Component {
    constructor(props){
      super(props);
      this.state = {
        isOpen: false
        };
    }
    showMenu(event){
      
    }
    render() {
      return(
      <div className="bar">
        <div className="child">Sage Michaels Official Website</div>
        <div className="child">
          <Link to='/CompSci'>Computer Science</Link>
        </div>
        <div className="child">
          <Link to='/Sleep'>Sleep</Link>
        </div>
      </div>
      );
    }

}
export default Header;
