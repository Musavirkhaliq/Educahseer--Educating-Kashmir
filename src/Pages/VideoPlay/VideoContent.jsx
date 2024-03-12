import React from 'react';
// import video from "../../assets/Videos/Neet Guide_F.mp4"
import Navbar from "../../Componants/Landing Page Componants/Navbar/Navbar";
import "./VideoContent.css"


function VideoContent() {
    return <>
        <Navbar></Navbar>
        <section className="video-content">
            <div className="container ">
                <div className=" flex">
                    <div className="video-source">

                    </div>
                    <div className="chapters">
                        <ul>
                            <li>hello world</li>
                            <li>hello world</li>
                            <li>hello world</li>
                            <li>hello world</li>
                            <li>hello world</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    </>
}
export default VideoContent;






