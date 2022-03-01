import '../App.css';
import React, { useRef } from 'react';
import { ReactDOM } from 'react';

export default function Content(){
    const inputArea = useRef();
    const editable = useRef(null);

    const createElements = ()=>{
        
        const tasks = React.createElement('div',{},'Prueba')
        console.log(inputArea.current.value);
    }

    return(
        <>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f7f7f7" className="svg" fill-opacity="1" d="M0,288L720,288L1440,224L1440,0L720,0L0,0Z"></path></svg> */}

        <div className="container">
            
            <div className="card">
                <h2 className="title">Title</h2>
                <div className="items" id='items'>
                    <div className="item">
                        <span>Item</span>
                        <div className="btn">
                            <ion-icon name="create"></ion-icon>
                            <ion-icon name="trash"></ion-icon>
                        </div>
                    </div> 

                    <div className='btn submit'>
                        <input placeholder='Type your task here' ref={inputArea}/> 

                        <div className='send'>
                            <ion-icon name="send" onClick={createElements}></ion-icon>
                        </div>
                        
                    </div>      
                </div>
            </div>
        </div>
        
        </>
    )
}