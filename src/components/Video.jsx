import React from 'react';
import './Video.css';

const Video = () => {
    return (
        <section id="video" className="video">
            <video className="cooking-video" autoPlay muted loop controls>
                <source src="/assets/cooking.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
};

export default Video;
