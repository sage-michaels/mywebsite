import React from 'react';
const Sleep = () => (
  <div>
    <div className="bgslp"> 
      <div className='dream'>
        <h1 className="centered">Sage Michaels' Sleep Related Works</h1>
      </div>
      <p className='dream'>It was the spring of 2017 and all I had was a dream: become the first ever professional sleeper. In persuit of this dream I sent 
        <a className="smallLink" href={require("../images/SleepResume.pdf")}> my sleep resume </a>
          to Tempur-Pedic's customer support email. I was surprised when only a few days later I was told that my resume had been sent to TempurPedic's marketing department. Excited by this news, I made a video of friends and family testifying to how incredible I am at sleeping.
      </p>
      <div className='videoWrapper'>
        <iframe src="https://www.youtube.com/embed/-IT_Hr_7Rr4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <p className='dream'> A committee on sleep sponsorship was convened and my sleep sponsorship was approved. I thought the fun was over when I recieved two TempurPedic pillows, a sleeping mask, and mattress topper in the mail; but it didn't stop there. In November of 2018 representatives from TempurPedic showed up at my house while I was still sleeping and surprised me with a mind blowing amount of TempurPedic gear. Don't beleive me? See for yourself:
      </p>
      <div className='centered'>
        <div className='videoWrapper'>
          <iframe frameborder="0" marginheight="0" marginwidth="0" src="http://katu.com/embed/amnw/am-northwest-lifestyle-health/tempur-pedic-superfan-surprise" ></iframe>
        </div>
      </div>
      <p className='dream'>If you are interested in working with a professional sleeper, contact me.</p>
      <div className='center' padding-bottom='10%'>
        <div className='videoWrapper'>
          <iframe src="https://www.youtube.com/embed/pwoqk_JD6Kc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
);

export default Sleep;
