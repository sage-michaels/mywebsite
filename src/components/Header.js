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
        <div className= "schild">
          <Link to='/'> Sage Michaels' Official Website</Link>
        </div> 
        <div className="child">
          <Link className="link1" to='/CompSci'>Computer Science</Link>
        </div>
        <div className="child">
          <Link className="link1"  to='/Sleep'>Sleep</Link>
        </div>
        <div className="child">
          <Link className="link1"  to='/Video'>Video Art</Link>
        </div>
        <div></div>
      </div>
      );
    }

}
export default Header;
