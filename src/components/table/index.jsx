import { useState, useEffect } from "react";

import "./styles.css";

import check from "../../assets/check.png";
import trash from "../../assets/trash.png";
import cart_black from "../../assets/cart_black.png";
import cart_without from "../../assets/cart_without.png";

import Button from "../button";

import { columns } from "../../db";

function Table({ cart, handleDeleteFromCart, setOpenPayScreen }) {
    //  const [quantity, setQuantity] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const handleOpenModal = (cart) => {
        setOpenPayScreen({ isOpen: true, itemId: cart });
    };

    // const handleLessQuantity = () => {
    //     setQuantity(quantity - 1);
    // };

    // const handleMoreQuantity = () => {
    //     setQuantity(quantity + 1);
    // };

    const deleteToItem = (itemId) => {
        handleDeleteFromCart(itemId);
    };

    const calculateTotalValue = () => {
        const total = cart.reduce((total, item) => {
            const itemValue = parseFloat(
                item.value.replace(".", "").replace(",", ".")
            );

            return total + (isNaN(itemValue) ? 0 : itemValue);
        }, 0);

        return total;
    };

    const totalValue = calculateTotalValue();

    const formatCurrency = (value) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value);
    };

    useEffect(() => {
        setDisabled(cart.length === 0);
    }, [cart]);

    return (
        <div className="table_container">
            <div className="table">
                <div className="table_content">
                    <div className="inner">
                        <div className="table_hero">
                            <img src={cart_black} alt="cart_black" />
                            <h2>Carrinho</h2>
                        </div>
                        {!cart.length ? (
                            <div className="without_date">
                                <div className="without_content">
                                    <img src={cart_without} alt="Seu carrinho" />
                                    <p>
                                        O carrinho está vazio. Procure ou cadastre produtos e
                                        adicione ao carrinho.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="overflow">
                                <table>
                                    <thead>
                                        <tr>
                                            {columns.map((item, index) => (
                                                <th key={index}>
                                                    <p>{item.title}</p>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <p>{item.name}</p>
                                                </td>
                                                <td>
                                                    <p>R${item.value}</p>
                                                </td>
                                                <td>
                                                    <div className="actions_table">
                                                        <button
                                                            background="#E52626"
                                                            onClick={() => deleteToItem(item.id)}
                                                        >
                                                            <img src={trash} alt="delete" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                    <div className="value">
                        <div className="quantity">
                            <h2>Quantidade de itens:</h2>
                            <h1>{cart.length}</h1>
                        </div>
                        <div className="price">
                            <h2>Valor total:</h2>
                            <h1>{formatCurrency(totalValue)}</h1>
                        </div>
                    </div>
                </div>
                <div className="btn_submit">
                    <Button
                        label={"Finalizar compra"}
                        src={check}
                        color={"#fff"}
                        background="#60b52c"
                        disabled={disabled}
                        onClick={() => handleOpenModal(cart)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Table;
