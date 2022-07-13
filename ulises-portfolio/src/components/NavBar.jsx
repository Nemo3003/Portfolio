import '../sass/styles.css';


export default function NavBar(){
    return <nav className="navigation">
        <ul className='list'>
            <li className='items'><a href="#">Home</a></li>
            <li className='items'> <a href='#'>&nbsp;Skills</a></li>
            <li className='items'> <a href='#'>&nbsp;About Me</a></li>
            <li className='items'><a href='#'>&nbsp;Projects</a></li>
            <li className='items'><a href='#'>&nbsp;Contact Me</a></li>
        </ul>
        <button className="btn">Menu</button>
    </nav>
}