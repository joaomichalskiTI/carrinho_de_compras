import "./styles.css";

import cart from "../../assets/cart.png";
import plus from "../../assets/plus.png";
import menu from "../../assets/menu.png";
import bag from "../../assets/bag.png";

import Button from "../button";
import Input from "../input";

function Form() {
    return (
        <div class="form_container">
            <div class="form">
                <div className="wrapper">
                    <div class="form_values">
                        <h1>CADASTRO DE PRODUTOS</h1>
                        <div class="inputs">
                            <Input label={"Nome do produto"} />
                            <Input label={"Valor do produto"} type={"currence"} />
                        </div>
                    </div>
                    <div class="actions">
                        <Button
                            label={"Adicionar ao carrinho"}
                            src={cart}
                            background="#DCB800"
                            fontSize="25px"
                            color="white"
                        />
                        <Button
                            label={"Cadastre esse produto"}
                            src={plus}
                            background="#4B4B4B"
                            fontSize="25px"
                            color="white"
                        />
                        <Button
                            label={"Seus produtos"}
                            src={menu}
                            background="#4535FE"
                            fontSize="25px"
                            color="white"
                        />
                    </div>
                </div>

                <div class="shop">
                    <Button
                        label={"Suas compras"}
                        src={bag}
                        background="#BABB99"
                        fontSize="25px"
                        color="white"
                    />
                </div>
            </div>
        </div>
    );
}

export default Form;
