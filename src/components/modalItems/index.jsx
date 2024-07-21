import { useState } from "react";

import "./styles.css"

import check from "../../assets/check.png";
import dell from "../../assets/delete.png";
import cart from "../../assets/cart.png";

import Button from "../button";

import { itemsModalShop } from "../../db"

function ModalItems({ onClose }) {
    return (
        <div className="modal_items_content">
            <div className="content_itemns">
                <table>
                    <thead>
                        <tr>
                            {itemsModalShop.map((item) => (
                                <th key={item.key}>
                                    <p>{item.title}</p>
                                </th>
                            ))}
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
                            <td className="btn_actions">
                                <div className="edit_delete">
                                    <Button
                                        src={dell}
                                        background="#E52626"
                                    />
                                </div>
                                <div className="inner_cart_item">
                                    <Button
                                        label={"Por no carrinho"}
                                        src={cart}
                                        background="#DCB800"
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="btn_finish">
                    <Button
                        onClick={onClose}
                        src={check}
                        label="Concluído"
                        background="#05A73C"
                    />
                </div>
            </div>
        </div>
    );
}

export default ModalItems;
