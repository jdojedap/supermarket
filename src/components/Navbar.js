import './Navbar.css'
import { NavLink } from "react-router-dom";
export default function Navbar() {

    return (
        <ul>
            <li>
                <NavLink to={"/teachers"} className="navlink">
                    CARNES
                </NavLink>

            </li>
            <li>
                <NavLink to={"/courses"} className="navlink">
                    FRUTAS
                </NavLink>
            </li>
            
        </ul>

    );

}