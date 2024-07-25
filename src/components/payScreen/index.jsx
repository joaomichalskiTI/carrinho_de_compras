import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";

import Button from "../button";

import Notes from "../notes";

import finish from "../../assets/finish.png";
import pay from "../../assets/pay.png";
import cash from "../../assets/money.png";
import check from "../../assets/check.png";
import hundred from "../../assets/100.png";
import fifty from "../../assets/50.png";
import twenty from "../../assets/20.png";
import ten from "../../assets/10.png";
import five from "../../assets/5.png";
import two from "../../assets/2.png";
import one from "../../assets/1.png";

import "./styles.css";

function PayScreen({ payCart, closePayScreen }) {
    const [notasNecessarias, setNotasNecessarias] = useState("");

    const calculateTotalValue = () => {
        const total = payCart.reduce((total, item) => {
            const itemValue = parseFloat(
                item.value.replace(".", "").replace(",", ".")
            );

            return total + (isNaN(itemValue) ? 0 : itemValue);
        }, 0);

        return total;
    };

    const formatCurrency = (value) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value);
    };

    const totalValue = calculateTotalValue();

    const calcularNotas = (total) => {
        const notas = [100, 50, 20, 10, 5, 2, 1];
        const resultado = {};

        for (let i = 0; i < notas.length; i++) {
            const nota = notas[i];
            const quantidade = Math.floor(total / nota);
            if (quantidade > 0) {
                resultado[nota] = quantidade;
                total -= quantidade * nota;
            }
        }

        return resultado;
    };

    const handleSubmitCart = (cartToSave) => {
        const savedCarts = JSON.parse(localStorage.getItem("carts")) || [];

        const totalValue = cartToSave.reduce((total, item) => {
            return total + (parseFloat(item.value.replace(",", ".")) || 0);
        }, 0);

        const resultado = calcularNotas(totalValue);
        setNotasNecessarias(resultado);

        const newCart = {
            date: new Date().toISOString(),
            itemCount: cartToSave.length,
            index: savedCarts.length,
            totalValue: totalValue.toFixed(2),
        };

        const updatedCarts = [...savedCarts, newCart];
        localStorage.setItem("carts", JSON.stringify(updatedCarts));
        toast.success("Carrinho salvo em compras anteriores");
        closePayScreen();
    };

    useEffect(() => {
        const resultado = calcularNotas(totalValue);
        setNotasNecessarias(resultado);
    }, [totalValue]);

    const Carrinho = () => {
        return (
            <div className="payScreen_content">
                <div className="pay_content">
                    <div className="title_pay_content">
                        <div className="img_content">
                            <img src={finish} alt="Finalizando" />
                        </div>
                        <h2>Finalizando sua compra</h2>
                    </div>
                    <div className="wrapper_table">
                        <div className="wrapper_table_container">
                            <table>
                                <thead>
                                    <tr className="table_payContent">
                                        <td>
                                            <p>Item</p>
                                        </td>
                                        <td>
                                            <p>Valor</p>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {payCart.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <p>{item.name}</p>
                                            </td>
                                            <td>
                                                <p>R${item.value}</p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="value_pay">
                            <h2>Valor total:</h2>
                            <h1>{formatCurrency(totalValue)}</h1>
                        </div>
                    </div>
                </div>
                <div className="close_cart_content">
                    <div className="title_info_content">
                        <div className="img_content">
                            <img src={pay} alt="Finalizando" />
                        </div>
                        <h2>Pagamento</h2>
                    </div>
                    <div>
                        <div className="title_info_content">
                            <div className="img_content">
                                <img src={cash} alt="Pagamento" />
                                <h3>Dinheiro</h3>
                            </div>
                            <p>O minimo de notas necessárias são:</p>
                        </div>
                    </div>
                    <div className="info_content">
                        <Notes
                            src={hundred}
                            label1={"Notas de R$100"}
                            label2={notasNecessarias[100] || 0}
                        />
                        <Notes
                            src={fifty}
                            label1={"Notas de R$50"}
                            label2={notasNecessarias[50] || 0}
                        />
                        <Notes
                            src={twenty}
                            label1={"Notas de R$20"}
                            label2={notasNecessarias[20] || 0}
                        />
                        <Notes
                            src={ten}
                            label1={"Notas de R$10"}
                            label2={notasNecessarias[10] || 0}
                        />
                        <Notes
                            src={five}
                            label1={"Notas de R$5"}
                            label2={notasNecessarias[5] || 0}
                        />
                        <Notes
                            src={two}
                            label1={"Notas de R$2"}
                            label2={notasNecessarias[2] || 0}
                        />
                        <Notes
                            src={one}
                            label1={"Notas de R$1"}
                            label2={notasNecessarias[1] || 0}
                        />
                    </div>
                    <div className="btn_close_cart">
                        <Button
                            src={check}
                            label={"Finalizar Compra"}
                            color={"#fff"}
                            background="#60b52c"
                            onClick={() => handleSubmitCart(payCart)}
                        />
                    </div>
                </div>
            </div>
        );
    };

    return <Carrinho />;
}

export default PayScreen;
