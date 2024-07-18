import { useState } from "react";

import "./styles.css";

import check from "../../assets/check.png";
import cartBlack from "../../assets/cartBlack.png";
import edit from "../../assets/edit.png";
import dell from "../../assets/delete.png";

import Button from "../button";

function Table() {
    const [quantity, setQuantity] = useState(0);

    const handleLessQuantity = () => {
        setQuantity(quantity - 1);
    };

    const handleMoreQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div class="table_container">
            <div class="table">
                <div class="table_content">
                    <div class="inner">
                        <div className="table_hero">
                            <img src={cartBlack} alt="Seu carrinho" />
                            <h2>Seu carrinho</h2>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <p>Produto</p>
                                    </th>
                                    <th>
                                        <p>Valor</p>
                                    </th>
                                    <th>
                                        <p>Quantidade</p>
                                    </th>
                                    <th></th>
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
                                    <td>
                                        <div className="btn_quantity_container">
                                            <div className="btn_quantity">
                                                <button onClick={handleLessQuantity}>-</button>
                                                <input type="text" value={quantity} disabled={true} />
                                                <button onClick={handleMoreQuantity}>+</button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="actions_table">
                                            <div class="edit_delete">
                                                <Button label={""} src={edit} background="#4535FE" />
                                                <Button label={""} src={dell} background="#E52626" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="value">
                        <h1>Valor total:</h1>
                        <h2>R$1.500,00</h2>
                    </div>
                </div>
                <div class="btn_submit">
                    <Button
                        label={"Finalizar compra"}
                        src={check}
                        background="#05A73C"
                        height="50px"
                        fontSize="30px"
                        fontWeight="bold"
                    />
                </div>
            </div>
        </div>
    );
}

export default Table;
