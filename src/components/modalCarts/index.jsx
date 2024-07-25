import { useState, useEffect } from "react";

import "./styles.css";

import previous_purchase from "../../assets/previous_purchase.png";
import close from "../../assets/close.png";

import Button from "../button";

import { carts, columnsModal } from "../../db";

function ModalCarts({ onClose }) {
    const [cart] = useState(() => {
        const savedCart = localStorage.getItem("carts");
        return savedCart ? JSON.parse(savedCart) : carts;
    });

    function formatDate(dateString) {
        const date = new Date(dateString);

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    useEffect(() => {
        localStorage.setItem("carts", JSON.stringify(cart));
    }, [cart]);

    return (
        <div className="modal_carts_container">
            <div className="content_carts">
                <div className="header_content_carts">
                    <div className="title_content_carts">
                        <img src={previous_purchase} alt="previous_purchase" />
                        <h1>Compras anteriores</h1>
                    </div>
                    <div className="btn_close">
                        <Button onClick={onClose} src={close} width={"25px"} />
                    </div>
                </div>
                <div className="table_items_carts">
                    <table>
                        <thead>
                            <tr>
                                {columnsModal.map((item, index) => (
                                    <th key={index}>
                                        <p>{item.title}</p>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index}>
                                    <td>Carrinho {index}</td>
                                    <td>{formatDate(item.date)}</td>
                                    <td>{item.itemCount}</td>
                                    <td>R${item.totalValue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ModalCarts;
