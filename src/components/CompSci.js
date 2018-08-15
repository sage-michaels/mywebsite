import React from 'react';
const CompSci = () => (
  <div>
    <div className="bgcomp"></div>
        <div className= "screen">


        
        <h2 className="centered" style={{fontFamily:'Courier, sanserif'}}> Computer Science Interests and Background </h2>
        <p className="terminal"> I am currently looking for a career where I can problem solve with a team, on a project that 
        positively impacts the world around us. 
        </p>
        <p className="terminal">I enjoy the problem solving aspect of computer science, and white boarding with peers to find a solution. </p>
        <p className="terminal"> As an undergrad I was mostly interested in theoretical math and computer science. My favorite classes were computability and complexity theory, algorithms and data structures, and cryptography. I wrote my senior thesis on <a className="terminal" href="https://github.com/sage-michaels/thesis/blob/master/thesis.pdf">circuit obfuscation and functional encryption</a>.</p>
            {/*<img src={require("../images/graduation.jpg")} className="pic"/>*/}

        <p className="terminal"> For more information, see: </p>
        <div className='center'>
            <button className='link2'><a href={require("../images/resume.pdf")}> my resume </a>
            </button>

            <button className='link2'>
                <a className="smallLink" href="http://www.github.com/sage-michaels"> github</a>
            </button>
         </div>
         </div>
  </div>
);

export default CompSci;
