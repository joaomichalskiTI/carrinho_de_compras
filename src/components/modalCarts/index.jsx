import "./styles.css";

import previous_purchase from "../../assets/previous_purchase.png";
import close from "../../assets/close.png";

import Button from "../button";

import { carts } from "../../db";

function ModalCarts({ onClose }) {
    return (
        <div className="modal_carts_container">
            <div className="content_carts">
                <div className="header_content_carts">
                    <div className="title_content_carts">
                        <img src={previous_purchase} alt="previous_purchase" />
                        <h1>Produtos Cadastrados</h1>
                    </div>
                    <div className="btn_close">
                        <Button onClick={onClose} src={close} width={"25px"} />
                    </div>
                </div>
                <div className="table_items_carts">
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <p>Carrinho</p>
                                </td>
                                <td>
                                    <p>Criado</p>
                                </td>
                                <td>
                                    <p>Itens</p>
                                </td>
                                <td>
                                    <p>Valor total</p>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p>Carrinho 1</p>
                                </td>
                                <td>
                                    <p>20 de junho, 10:45</p>
                                </td>
                                <td>
                                    <p>6 itens</p>
                                </td>
                                <td>
                                    <p>R$135,00</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ModalCarts;
