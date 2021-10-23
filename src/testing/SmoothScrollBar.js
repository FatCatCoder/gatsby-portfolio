import React from 'react';
import {Scrollbar} from 'smooth-scrollbar-react';

import Particles from 'react-particles-js';
import particlesConfig from "../styles/particlesConfig.json"

function SmoothScrollBar(props){
    return(
        <>
        <div className='list-data' style={{display: 'flex', maxHeight: '100vh', maxWidth: '100%', overflowX: "hidden"}}>
        <Particles className="vh-100 particles z-behind position-fixed top-0 p-0 m-0" params={particlesConfig}/>
            <Scrollbar damping={0.05} plugins={{overscroll: {effect: 'bounce', damping: 0.1}}} data-scrollbar>
                {props.children}
            </Scrollbar>
        </div>
        </>
    )
}

export default SmoothScrollBar