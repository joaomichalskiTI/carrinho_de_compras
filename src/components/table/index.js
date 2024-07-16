import "./styles.css";

import Button from "../button";

function Table() {
    return (
        <div class="table">
            <div className="table_hero">
                <h1>Seu carrinho</h1>
            </div>

            <Button label={"batata"} background="red" />
        </div>
    );
}

export default Table;
