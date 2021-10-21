import React from 'react';
import {Scrollbar} from 'smooth-scrollbar-react';


export function SmoothScroll({children}){
    return(
        <div className='list-data' style={{display: 'flex', maxHeight: '100vh', maxWidth: '100%', overflowX: "hidden"}}>
        <Scrollbar
            damping={0.05}
            plugins={{
            overscroll: {
                effect: 'bounce',
                damping: 0.1,
            },
            }}>
            {children}
        </Scrollbar>
        </div>
    );
}

