import "./styles.css";

import logo from "../../assets/logo.png";

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" draggable={false} />
        </header>
    );
}

export default Header;
