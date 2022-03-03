import React from 'react';
import './../../../scss/home/video/videoDef.scss';

const VideoDef = () => {

    return (
        <div className='video-def--cntr'>

            <div className='child-a-vdc'>
                It’s just that simple
            </div>
            <div className='child-b-vdc'>
                See how it works
            </div>
            <div className='child-c-vdc'>
                <img style={{ width: '100%', height: '550px' }} className="vidyard-player-embed" src="https://play.vidyard.com/GU1i4AscWTQU8mZMqXUB9C.jpg" data-uuid="GU1i4AscWTQU8mZMqXUB9C" data-v="4" data-type="inline" />
            </div>
        </div>
    )
}

export default VideoDef;