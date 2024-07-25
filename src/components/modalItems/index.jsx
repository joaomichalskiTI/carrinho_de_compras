import "./styles.css";

import trash from "../../assets/trash.png";
import cart from "../../assets/cart.png";
import menu2 from "../../assets/menu2.png";
import close from "../../assets/close.png";

import Button from "../button";

import { itemsModalShop } from "../../db";

function ModalItems({ onClose, item, handleDeleteItem }) {
    const deleteItem = (itemId) => {
        handleDeleteItem(itemId);
    };

    return (
        <div className="modal_itens_content">
            <div className="content_itens">
                <div className="header_content">
                    <div className="title_content">
                        <img src={menu2} alt="Menu" />
                        <h1>Produtos Cadastrados</h1>
                    </div>
                    <div className="btn_close">
                        <Button onClick={onClose} src={close} width={"25px"} />
                    </div>
                </div>
                <div className="table_itens">
                    <table>
                        <thead className="table_head">
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
                                    <div className="delete_product">
                                        <Button
                                            src={trash}
                                            width={"24px"}
                                            onClick={() => deleteItem(item.id)}
                                        />
                                    </div>
                                    <div className="inner_cart_item">
                                        <Button
                                            label={"Adicionar ao carrinho"}
                                            src={cart}
                                            background="#549BFF"
                                            color={"#fff"}
                                            fontWeigth={"800"}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Caixa de leite</p>
                                </td>
                                <td>
                                    <p>R$5,00</p>
                                </td>
                                <td className="btns_actions">
                                    <div className="delete_product">
                                        <Button
                                            src={trash}
                                            width={"24px"}
                                            onClick={() => deleteItem(item.id)}
                                        />
                                    </div>
                                    <div className="inner_cart_item">
                                        <Button
                                            label={"Adicionar ao carrinho"}
                                            src={cart}
                                            background="#549BFF"
                                            color={"#fff"}
                                            fontWeigth={"800"}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Caixa de leite</p>
                                </td>
                                <td>
                                    <p>R$5,00</p>
                                </td>
                                <td className="btns_actions">
                                    <div className="delete_product">
                                        <Button
                                            src={trash}
                                            width={"24px"}
                                            onClick={() => deleteItem(item.id)}
                                        />
                                    </div>
                                    <div className="inner_cart_item">
                                        <Button
                                            label={"Adicionar ao carrinho"}
                                            src={cart}
                                            background="#549BFF"
                                            color={"#fff"}
                                            fontWeigth={"800"}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Caixa de leite</p>
                                </td>
                                <td>
                                    <p>R$5,00</p>
                                </td>
                                <td className="btns_actions">
                                    <div className="delete_product">
                                        <Button
                                            src={trash}
                                            width={"24px"}
                                            onClick={() => deleteItem(item.id)}
                                        />
                                    </div>
                                    <div className="inner_cart_item">
                                        <Button
                                            label={"Adicionar ao carrinho"}
                                            src={cart}
                                            background="#549BFF"
                                            color={"#fff"}
                                            fontWeigth={"800"}
                                        />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ModalItems;
