import React from 'react';
const Home = () => (
  <div className= 'center' style={{marginTop: "20px"}}>
  <div style={{margin_top: "20%" }}>
  <h1> Thanks for visiting!</h1> 
     <div className='center'>
    <img style={{padding: '50px'}}
         src="../../images/sage.jpg"
         alt="sage"
         width={5760/10}
         height={3840/10}
         />
    </div>
 
  <h2>It's nice to have you here. Please explore the links above to learn more about Sage Michaels.</h2>
  <h3> This website was made in about a week as a way to learn React.</h3>
  <h3> Checkout this website's code  
  <a className="smallLink" href="https://github.com/sage-michaels/mywebsite"> here</a> 
  .</h3>
  </div>
  </div>
);

export default Home;
