import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Style1.css';
import About from './About'


class Header extends Component {
    constructor(props){
      super(props);
      this.state = {
        isOpen: false
        };
    }

    toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    }
    
    render() {
      return(
      <div className="container">
        <div className="bar">
          <div></div>

          <div className= "child">
            <Link className="homelink" to='/'> Sage Michaels' Official Website</Link>
          </div> 
          <div className="child">
            <Link className="link1" to='/CompSci'>Computer Science</Link>
          </div>
          <div className="child">
            <Link className="link1"  to='/Sleep'>Sleep</Link>
          </div>
          {/*<div className="child">
            <Link className="link1"  to='/Video'>Video Art</Link>
          </div>*/}
          
          <div className="child">
              <button className="about" onClick={this.toggleModal}>
                About
              </button>

            <About show={this.state.isOpen}
              onClose={this.toggleModal}>
            </About>
          
          </div>

          <div></div>
        </div>
      </div>
      );
    }

}
export default Header;
