
import "./styles.css"

import check from "../../assets/check.png";
import trash from "../../assets/trash.png";
import cart from "../../assets/cart.png";
import menu2 from "../../assets/menu2.png"
import close from "../../assets/close.png"

import Button from "../button";

import { itemsModalShop } from "../../db"

function ModalItems({ onClose }) {
    return (
        <div className="modal_itens_content">
            <div className="content_itens">
                <div className="header_content">
                    <div className="title_content">
                        <img src={menu2} alt="Menu" />
                        <h1>Produtos Cadastrados</h1>
                    </div>
                    <div className="btn_close">
                        <Button
                            onClick={onClose}
                            src={close}
                        />
                    </div>
                </div>
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
                            <td className="btns_actions">
                                <div className="edit_delete">
                                    <Button
                                        src={trash}
                                    />
                                </div>
                                <div className="inner_cart_item">
                                    <Button
                                        label={"Adicionar ao carrinho"}
                                        src={cart}
                                        background="#549BFF"
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ModalItems;
