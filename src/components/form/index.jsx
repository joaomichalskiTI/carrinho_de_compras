import { useState } from "react";

import "./styles.css";

import cart from "../../assets/cart.png";
import plus from "../../assets/plus.png";
import menu from "../../assets/menu.png";
import bag from "../../assets/bag.png";

import Button from "../button";
import Input from "../input";

function Form({ isOpenModalCarts }) {
    return (
        <div className="form_container">
            <div className="form">
                <div className="wrapper">
                    <div className="form_values">
                        <h1>CADASTRO DE PRODUTOS</h1>
                        <div className="inputs">
                            <Input label={"Nome do produto"} />
                            <Input label={"Valor do produto"} type={"currence"} />
                        </div>
                    </div>
                    <div className="actions">
                        <Button
                            label={"Adicionar ao carrinho"}
                            src={cart}
                            background="#DCB800"
                        />
                        <Button
                            label={"Cadastre esse produto"}
                            src={plus}
                            background="#4B4B4B"
                        />
                        <Button label={"Seus produtos"} src={menu} background="#4535FE" />
                    </div>
                </div>
                <div className="shop">
                    <Button
                        label={"Suas compras"}
                        src={bag}
                        background="#BABB99"
                        onClick={isOpenModalCarts}
                    />
                </div>
            </div>
        </div>
    );
}

export default Form;
