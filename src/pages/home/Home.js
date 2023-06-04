import React from "react";

const Home = () => {
    return (
        <div className="homepage">
            <article className="home-text">
                <span id="heading">So, You want to travel to</span>
                <h1>Space</h1>
                <p>
                lorem ipsum 
                </p>
            </article>
            <figure className='backgroundHome'>
                <img src={BackgroundHome} alt='BackgroundHome' />
            </figure>
            <button className="explore-btn">
                Explore
            </button>
        </div>
    );
};

export default Home;