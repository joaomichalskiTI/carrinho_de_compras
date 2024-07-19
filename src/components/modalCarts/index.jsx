import "./styles.css";

import check from "../../assets/check.png";

import Button from "../button";

import { carts } from "../../db";

function ModalCarts({ onClose }) {
    return (
        <div className="modal_carts_container">
            <div className="content_carts">
                <div className="inner_carts">
                    {carts.map((item, index) => (
                        <div className="intem_carts" key={index}>
                            <div>
                                <img src={item.src} alt="" />
                            </div>
                            <p>Carrinho {index + 1}</p>
                        </div>
                    ))}
                </div>
                <div className="btn_finish">
                    <Button
                        onClick={onClose}
                        src={check}
                        label="Concluído"
                        background="#05A73C"
                    />
                </div>
            </div>
        </div>
    );
}

export default ModalCarts;
