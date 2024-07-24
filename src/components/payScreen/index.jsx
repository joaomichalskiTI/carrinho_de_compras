import React from "react";

import Button from "../button";

import Notes from "../notes"

import finish from "../../assets/finish.png";
import pay from "../../assets/pay.png";
import cash from "../../assets/money.png";
import check from "../../assets/check.png";
import hundred from "../../assets/100.png"
import fifty from "../../assets/50.png"
import twenty from "../../assets/20.png"
import ten from "../../assets/10.png"
import five from "../../assets/5.png"
import two from "../../assets/2.png"
import one from "../../assets/1.png"

import "./styles.css";

function payScreen() {
    return (
        <div className="payScreen_content">
            <div className="pay_content">
                <div className="title_pay_content">
                    <div className="img_content">
                        <img src={finish} alt="Finalizando" />
                    </div>
                    <h2>Finalizando sua compra</h2>
                </div>
                <div className="wrapper_table">
                    <div className="wrapper_table_container">
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
                    <div className="value_pay">
                        <h2>Valor total:</h2>
                        <h2>R$1.500,00</h2>
                    </div>
                </div>
            </div>
            <div className="close_cart_content">
                <div className="title_info_content">
                    <div className="img_content">
                        <img src={pay} alt="Finalizando" />
                    </div>
                    <h2>Pagamento</h2>
                </div>
                <div>
                    <div className="title_info_content">
                        <div className="img_content">
                            <img src={cash} alt="Pagamento" />
                        </div>
                        <h3>Dinheiro</h3>
                    </div>
                </div>
                <div className="info_content">
                    <Notes src={hundred} label1={"Notas de R$100"} label2={"16"} />
                    <Notes src={fifty} label1={"Notas de R$50"} label2={"16"} />
                    <Notes src={twenty} label1={"Notas de R$20"} label2={"16"} />
                    <Notes src={ten} label1={"Notas de R$10"} label2={"16"} />
                    <Notes src={five} label1={"Notas de R$5"} label2={"16"} />
                    <Notes src={two} label1={"Notas de R$2"} label2={"16"} />
                    <Notes src={one} label1={"Notas de R$1"} label2={"16"} />
                </div>
                <div className="btn_close_cart">
                    <Button
                        src={check}
                        label={"Dinheiro depositado"}
                        color={"#fff"}
                        background="#60b52c"
                    />
                </div>
            </div>

        </div>
    );
}

export default payScreen;
