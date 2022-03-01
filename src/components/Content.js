import '../App.css';
import React, { useRef } from 'react';
// import ReactDOM from 'react-dom';

export default function Content(){
    const inputArea = useRef('');
    const editable = useRef(null);

    const createElements = ()=>{
        /*const taskName = React.createElement('span',{},'Item');
        const btnContainer = React.createElement('div',{className:'btn'},[
            React.createElement('ion-icon',{name:'create'},''),
            React.createElement('ion-icon',{name:'trash'},'')
        ])
        const tasks = React.createElement('div',{className:'item'},[taskName,btnContainer]);

        ReactDOM.render(tasks,document.getElementById('items'))
        
        console.log(inputArea.current.value);*/

        const tasks = document.createElement("DIV");
        tasks.classList.add('item');

        const taskName = document.createElement("SPAN");
        taskName.setAttribute("ref",editable);
        let name = inputArea.current.value;
        console.log(inputArea.current.value);
        if(inputArea.current.value===''){
            return false;
        }else{
            taskName.textContent = name;
            inputArea.current.value='';
        }
        
        const edit = ()=>{
            return editable.current.setAttribute("contenteditable","true");
        }
        const btnContainer = document.createElement("DIV");
        btnContainer.classList.add('btn');

        const create = document.createElement("ion-icon");
        create.setAttribute("name","create");
        create.setAttribute("onClick", edit());

        const trash = document.createElement("ion-icon");
        trash.setAttribute("name","trash"); 

        btnContainer.appendChild(create);
        btnContainer.appendChild(trash);
        tasks.appendChild(taskName);
        tasks.appendChild(btnContainer);
        document.getElementById('items').appendChild(tasks);
    }


    return(
        <>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f7f7f7" className="svg" fill-opacity="1" d="M0,288L720,288L1440,224L1440,0L720,0L0,0Z"></path></svg> */}

        <div className="container">
            
            <div className="card">
                <h2 className="title">Title</h2>
                <div className="items" id='items'>
                    {/* <div className="item">
                        <span>Item</span>
                        <div className="btn">
                            <ion-icon name="create"></ion-icon>
                            <ion-icon name="trash"></ion-icon>
                        </div>
                    </div>  */}

                </div>
                    <div className='btn submit'>
                        <input placeholder='Type your task here' ref={inputArea}/> 

                        <div className='send'>
                            <ion-icon name="send" onClick={createElements}></ion-icon>
                        </div>
                        
                    </div>      
            </div>
        </div>
        
        </>
    )
}