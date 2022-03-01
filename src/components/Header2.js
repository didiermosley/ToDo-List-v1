import '../App.css';

function Header2(){
    let test = `This is a test for my new project (Header component).`;

    return(
        
        <div className="header">
            <h1>Header 2</h1>
            <span>with Pomodoro</span>
            <p>{test}</p>
        </div>
    );
}

export default Header2;