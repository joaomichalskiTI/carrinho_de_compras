import "./styles.css";

import cart from "../../assets/cart.png";
import plus from "../../assets/plus.png";
import menu from "../../assets/menu.png";
import bag from "../../assets/bag.png";

import Button from "../button";
import Input from "../input"

function Form() {
    return (
        <div class="form">
            <h1>CADASTRO DE PRODUTOS</h1>
            <div class="input">
                <Input label={"Nome do produto"} />
                <Input label={"Valor do produto"} />
            </div>
            <div class="actions">
                <Button label={"Adicionar ao carrinho"} src={cart} background="#DCB800" margin="10px " fontSize="25px" color="white" />
                <Button label={"Cadastre esse produto"} src={plus} background="#4B4B4B" margin="10px" fontSize="25px" color="white" />
                <Button label={"Seus produtos"} src={menu} background="#4535FE" margin="10px" fontSize="25px" color="white" />
            </div>
            <div class="shop">
                <Button label={"Suas compras"} src={bag} background="#BABB99" fontSize="25px" color="white" />
            </div>
        </div>
    );
}

export default Form;
