import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav className="menu">
            <ul>
                <li><Link to="/">Play Wordle</Link></li>
                <li><a href="/highscores">Highscores</a></li>
                <li><Link to="/info">Information</Link></li>
            </ul>
        </nav>

    )
}

export default Menu