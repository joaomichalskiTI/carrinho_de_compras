import "./styles.css";

import cart from "../../assets/cart.png";
import plus from "../../assets/plus.png";
import menu from "../../assets/menu.png";
import bag from "../../assets/bag.png";

import Button from "../button";

function Form() {
    return (
        <div class="form">
            <h1>CADASTRO DE PRODUTOS</h1>
            <Button label={"Adicionar ao carrinho"} src={cart} background="#DCB800" />
            <Button label={"Cadastre esse produto"} src={plus} background="#4B4B4B" />
            <Button label={"Seus produtos"} src={menu} background="#4535FE" />
            <Button label={"Suas compras"} src={bag} background="#BABB99" />
        </div>
    );
}

export default Form;
