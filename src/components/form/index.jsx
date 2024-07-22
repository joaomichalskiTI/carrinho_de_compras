import { useState, useEffect } from "react";

import "./styles.css";

import carts from "../../assets/cart.png";
import plus from "../../assets/plus.png";
import menu from "../../assets/menu.png";
import bag from "../../assets/bag.png";
import book from "../../assets/book.png";

import Button from "../button";
import Input from "../input";

import { cart, addToCart } from "../../db";

function Form({ isOpenModalCarts, isOpenModalItens }) {
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [cartState, setCartState] = useState(cart);

    useEffect(() => {
        // Atualiza o estado local sempre que o array `cart` é modificado
        setCartState([...cart]);
    }, [cart]);

    const handleAddToCart = () => {
        const newItem = {
            id: Date.now().toString(), // Gerar um ID único
            name: name,
            value: value,
            quantity: 1, // Ajustar conforme necessário
        };
        addToCart(newItem);
        setCartState([...cart]); // Atualiza o estado local
        console.log(cart); // Para verificar se o item foi adicionado corretamente
        setName(""); // Limpar o campo após adicionar
        setValue(""); // Limpar o campo após adicionar
    };

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
                            onClick={handleAddToCart}
                        />
                        <Button
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
                        />
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
