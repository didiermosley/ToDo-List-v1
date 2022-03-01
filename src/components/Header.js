import '../App.css';

function Header(){
    let test = `This is a test for my new project (Header component).`;

    return(
        
        <div className="header">
            <h1>ToDo List</h1>
            <span>with Pomodoro</span>
        </div>
        
    );
}

export default Header;