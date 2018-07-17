import React from 'react';
const CompSci = () => (
  <div style={{marginTop: "20px"}}>
    <p> As an undergrad I was mostly interested in theoretical math and computer science. My favorite classes were computability and complexity theory, algorithms and data structures, and cryptography. I wrote my senior thesis on 
    <a className="smallLink" href="https://github.com/sage-michaels/thesis/blob/master/thesis.pdf"> circuit obfuscation and functional encryption. </a>
    Now I am interested in getting more expirience with software development.
    </p>
    
    <p> For more information, see: </p>
    <div className='center'>
        <button className='link2'><a className="smallLink" href="../../images/resume.pdf"> my resume </a>
        </button>

        <button className='link2'>
      <a className="smallLink" href="http://www.github.com/sage-michaels"> github</a>
         </button>
         </div>
    <div className='center'>
    <img style={{padding: '50px'}} 
         src="../../images/sage.jpg" 
         alt="sage"
         width={5760/10}
         height={3840/10} 
         />
    </div>
  </div>
);

export default CompSci;
