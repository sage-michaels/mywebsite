import React from 'react';
const Home = () => (
  <div style={{marginTop: "20px"}}>
    <h2>Welcome to Sage Michaels official website</h2>
    <h3>Click around to discover everything there is to now about Sage Michaels.</h3>
    <h4><a className="smallLink" href="../../images/resume.pdf">my resume</a></h4>
    <h4><a className="smallLink" href="http://www.github.com/sage-michaels">my github</a></h4>
    <img style={{padding: '50px'}} 
         src="../../images/sage.jpg" 
         alt="sage"
         width={5760/10}
         height={3840/10} 
         />
  </div>
);

export default Home;
