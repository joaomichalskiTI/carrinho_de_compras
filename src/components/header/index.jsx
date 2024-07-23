import "./styles.css";

import back from "../../assets/back.png";
import logo from "../../assets/logo.png";

import Button from "../button";

function Header({ screnPay, setScreen }) {
    return (
        <header
            style={
                screnPay === "2"
                    ? {
                        justifyContent: "space-between",
                        padding: "12px 50px 14px",
                    }
                    : { justifyContent: "center" }
            }
        >
            {screnPay === "2" && (
                <div className="back">
                    <Button onClick={() => setScreen("2")} src={back} />
                    <p>Voltar</p>
                </div>
            )}
            <img src={logo} alt="logo" draggable={false} />
            {screnPay === "2" && <span />}
        </header>
    );
}

export default Header;
