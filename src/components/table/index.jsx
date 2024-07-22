import { useState, useEffect } from "react";

import "./styles.css";

import check from "../../assets/check.png";
import trash from "../../assets/trash.png";
import cartBlack from "../../assets/cartBlack.png";
import cart_without from "../../assets/cart_without.png";

import Button from "../button";

import { columns } from "../../db";

function Table({ cart, handleDeleteFromCart }) {
    const [quantity, setQuantity] = useState(0);

    const handleLessQuantity = () => {
        setQuantity(quantity - 1);
    };

    const handleMoreQuantity = () => {
        setQuantity(quantity + 1);
    };

    const deleteToItem = (itemId) => {
        handleDeleteFromCart(itemId);
    };

    return (
        <div className="table_container">
            <div className="table">
                <div className="table_content">
                    <div className="inner">
                        <div className="table_hero">
                            <img src={cartBlack} alt="Seu carrinho" />
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
                            <table>
                                <thead>
                                    <tr>
                                        {columns.map((item) => (
                                            <th key={item.key}>
                                                <p>{item.title}</p>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <p>{item.name}</p>
                                            </td>
                                            <td>
                                                <p>R${item.value ? item.value : "0,00"}</p>
                                            </td>
                                            <td>
                                                <div className="btn_quantity_container">
                                                    <div className="btn_quantity">
                                                        <button
                                                            onClick={handleLessQuantity}
                                                            disabled={quantity === 0}
                                                        >
                                                            -
                                                        </button>
                                                        <input
                                                            type="text"
                                                            value={quantity}
                                                            disabled={true}
                                                        />
                                                        <button
                                                            onClick={handleMoreQuantity}
                                                            disabled={quantity === 10}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
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
                        )}
                    </div>
                    <div className="value">
                        <h1>Valor total:</h1>
                        <h2>R$1.500,00</h2>
                    </div>
                </div>
                <div className="btn_submit">
                    <Button
                        label={"Finalizar compra"}
                        src={check}
                        color={"#fff"}
                        background="#05A73C"
                    />
                </div>
            </div>
        </div>
    );
}

export default Table;
