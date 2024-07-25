import "./styles.css";

import back from "../../assets/back.png";
import logo from "../../assets/logo.png";

import Button from "../button";

function Header({ screnPay, setScreen }) {
    return (
        <header
            style={
                screnPay
                    ? {
                        justifyContent: "space-between",
                        padding: "12px 50px 14px",
                    }
                    : { justifyContent: "center" }
            }
        >
            {screnPay && (
                <div className="back">
                    <Button onClick={setScreen} src={back} label={"Voltar"} />
                </div>
            )}
            <img src={logo} alt="logo" draggable={false} />
            {screnPay && <span />}
        </header>
    );
}

export default Header;
