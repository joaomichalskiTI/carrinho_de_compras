import React from "react";

import Button from "../button"

import finish from "../../assets/finish.png";
import pay from "../../assets/pay.png"
import cash from "../../assets/money.png"

import "./styles.css";

function payScreen() {
    return (
        <div className="payScreen_content">
            <div className="pay_content">
                <header>
                    <div className="img_content">
                        <img src={finish} alt="Finalizando" />
                    </div>
                    <h1>Finalizando sua compra</h1>
                </header>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <p>Item</p>
                            </td>
                            <td>
                                <p>Valor</p>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>Caixa de leite</p>
                            </td>
                            <td>
                                <p>R$5,00</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="info_content">
                <header>
                    <div className="img_content_finish">
                        <img src={pay} alt="Finalizando" />
                    </div>
                    <h1>Pagamento</h1>
                </header>
                <div>
                    <div>
                        <img src={cash} alt="Pagamento" />
                        <h1>Dinheiro</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default payScreen;
