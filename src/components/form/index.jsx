import { useState, useEffect } from "react";

import "./styles.css";

import carts from "../../assets/cart.png";
//import plus from "../../assets/plus.png";
//import menu from "../../assets/menu.png";
import bag from "../../assets/bag.png";
import book from "../../assets/book.png";

import Button from "../button";
import Input from "../input";

function Form({ isOpenModalCarts, isOpenModalItens, handleAddToCart }) {
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [disabled, setDisabled] = useState(false);

    const addToCart = () => {
        const newItem = {
            id: Date.now(),
            name: name,
            value: value,
            quantity: 1,
        };

        handleAddToCart(newItem);
        setName("");
        setValue("");
    };

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const cartLength = cart.length;

        if (!name | !value | (cartLength >= 10)) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [name, value]);

    return (
        <div className="form_container">
            <div className="form">
                <div className="wrapper">
                    <div className="form_values">
                        <div className="form_title">
                            <img src={book} alt="book" />
                            <h1>CADASTRO DE PRODUTOS</h1>
                        </div>
                        <div className="inputs">
                            <Input
                                label={"Nome do produto"}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder={"Digite aqui"}
                            />
                            <Input
                                label={"Valor do produto"}
                                type={"currence"}
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder={"0,00"}
                            />
                        </div>
                    </div>
                    <div className="actions">
                        <Button
                            label={"Adicionar ao carrinho"}
                            src={carts}
                            color="#fff"
                            background="#549BFF"
                            onClick={addToCart}
                            disabled={disabled}
                        />
                        {/* <Button
                            label={"Cadastre esse produto"}
                            src={plus}
                            color="#fff"
                            background="#9679E6"
                        />
                        <Button
                            label={"Seus produtos"}
                            src={menu}
                            color="#fff"
                            background="#112D55"
                            onClick={isOpenModalItens}
                        /> */}
                    </div>
                </div>
                <div className="shop">
                    <Button
                        label={"Compras anteriores"}
                        src={bag}
                        color="#549BFF"
                        background="#DDEBFF"
                        onClick={isOpenModalCarts}
                    />
                </div>
            </div>
        </div>
    );
}

export default Form;
