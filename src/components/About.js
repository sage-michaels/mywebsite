import React from 'react';
import PropTypes from 'prop-types';

/**
 * modal for site info
 */
class About extends React.Component {
  render() {
    // only render on click
    if (!this.props.show) {
      return null;
    }
const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#E6CDFE',
      borderColor: 'rgb(76, 0, 160)',
      borderRadius: 5,
      borderStyle: 'solid',
      maxWidth: 500,
      margin: 'auto',
      padding: 30,
      textAlign: 'center',
      color: '#FDFEFE'
    };

    return (
      <div>
        <div className="backdrop" style={backdropStyle}>
          <img className="brdclr" src={require("../images/static.gif")}/>
          <div style={{width:'100%'}}>
            <div className="centermodal">
              <div className="modal" style={modalStyle}>
                <h2> This website was made in about a week as a way to learn React.
                      Checkout this website's code <a className="smallLink"
                      href="https://github.com/sage-michaels/mywebsite"> 
                      here
                  </a> 
              . </h2>
                <pre></pre>
                <button onClick={this.props.onClose}>
                  Close
                </button>
              </div>
          </div>
        </div>
      </div>
      </div>

    )
  }
}

About.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

export default About;