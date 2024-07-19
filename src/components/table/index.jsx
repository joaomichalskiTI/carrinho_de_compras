import { useState } from "react";

import "./styles.css";

import check from "../../assets/check.png";
import cartBlack from "../../assets/cartBlack.png";
// import edit from "../../assets/edit.png";
import dell from "../../assets/delete.png";

import Button from "../button";

import { cart, columns } from "../../db";

function Table() {
    const [quantity, setQuantity] = useState(0);

    const [item, setItem] = useState(cart);

    console.log("ietem", cart);

    const handleLessQuantity = () => {
        setQuantity(quantity - 1);
    };

    const handleMoreQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="table_container">
            <div className="table">
                <div className="table_content">
                    <div className="inner">
                        <div className="table_hero">
                            <img src={cartBlack} alt="Seu carrinho" />
                            <h2>Seu carrinho</h2>
                        </div>
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
                                {item.map((item) => (
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
                                                    <input type="text" value={quantity} disabled={true} />
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
                                                <div className="edit_delete">
                                                    {/* <Button src={edit} background="#4535FE" /> */}
                                                    <Button src={dell} background="#E52626" />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
