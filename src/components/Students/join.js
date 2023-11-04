import React from 'react'
import video from '../Assets/video.mp4';
import './join.css'
function JoinClass() {
    return(
        <>
        <div>
            <h1 className='Heading'>B41 WD Tamil - Shared screen with speaker view</h1>
        </div>
    <div className="video-container">
            <video controls>
                <source src={video} type="video/mp4" />
            </video>
    </div>
    </>
    )
}
export default JoinClass

