import React from 'react';

function Hero() {
  return (
    <>
    <section className="hero">

      <div className="hero-text">
        <h2>Featured Movie</h2>
        <p>Watch the latest blockbuster now!</p>
        <button>Play</button>
        <button className="secondary">More Info</button>
      </div>

      <video className="hero-video" autoPlay loop muted>
        <source src="/netflix.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </section>
    
    <section className='featured-movie'>
      <div className='featured-background'>
        <img className= 'featured-poster'src='img/squidgameprev.jpg' alt='Squid Game Season 3'/>
        <div className='featured-name'>
          <div className='netflix-feature'>
          <h5><img src='img/n-series-logo.jpg'/></h5>
         <h4><img src='img/squidgame-logo.jpg' alt='Squid Game'/></h4></div>
         <div className='feature-text'> <button>Play</button>
        <button className="secondary">More Info</button></div>
         <p>Continuing from where Season 2 ends, Seong Gi-Hun must find a way to once again mentally and physically overcome bloodshed and duress while still playing the children's game on a grander and dangerous scale. </p>
          </div>
        </div>
    </section>
    </>
  );
}

export default Hero;
