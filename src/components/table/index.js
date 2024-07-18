import "./styles.css";

import check from "../../assets/check.png";
import cartBlack from "../../assets/cartBlack.png";
import edit from "../../assets/edit.png";
import dell from "../../assets/delete.png";

import Button from "../button";

function Table() {
    return (
        <div class="table_container">
            <div class="table">
                <div class="tabela">
                    <div class="produtos">
                        <div className="table_hero">
                            <img src={cartBlack} alt="Seu carrinho" />
                            <h2>Seu carrinho</h2>
                        </div>
                        <div className="title">
                            <h3>Produto</h3>
                            <h3>Valor</h3>
                        </div>


                        <div className="listaDeProdutos">
                            <div className="texto">
                                <p>Caixa de leite</p>
                                <p>R$5,00</p>
                            </div>
                            <div className="actions">
                                <Button label={"+2-"} src={check} background="white" />
                                <Button label={""} src={edit} background="#4535FE" />
                                <Button label={""} src={dell} background="#E52626" />
                            </div>
                        </div>
                    </div>


                    <div class="total">
                        <h1>Valor total:</h1>
                        <h1>R$1.500,00</h1>
                    </div>
                </div>
                <Button
                    label={"Finalizar compra"}
                    src={check}
                    background="#05A73C"
                    color="white"
                    width="80%"
                    height="50px"
                    fontFamily="'Inter', sans-serif"
                    fontSize="30px"
                    fontWeight="bold"
                />
            </div>
        </div>
    );
}

export default Table;
