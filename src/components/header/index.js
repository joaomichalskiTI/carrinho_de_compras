import "./styles.css";

import logo from "../../assets/logo.png";

function Header() {
    return (
        <div class="header">
            <img src={logo} alt="logo" />
        </div>
    );
}

export default Header;
