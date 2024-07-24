import { useState } from "react";

import "./styles.css";

import Header from "../header";
import Table from "../table";
import Form from "../form";
import PayScreen from "../payScreen";

import ModalCarts from "../modalCarts";
import ModalItems from "../modalItems";

import { initialCart } from "../../db";

function Layout() {
    const [screen, setScreen] = useState("1");

    const [open, setOpen] = useState(false);
    const [openItems, setOpenItems] = useState(false);
    const [cart, setCart] = useState(initialCart);

    const handleAddToCart = (newItem) => {
        setCart((prevCart) => [...prevCart, newItem]);
    };

    const handleDeleteFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    };

    return (
        <div className="layout">
            <Header screnPay={screen} setScreen={() => setScreen("1")} />
            <main>
                {screen === "1" ? (
                    <>
                        <Table
                            cart={cart}
                            handleDeleteFromCart={handleDeleteFromCart}
                            setOpenPayScreen={() => setScreen("2")}
                        />
                        <Form
                            isOpenModalCarts={() => setOpen(true)}
                            isOpenModalItens={() => setOpenItems(true)}
                            handleAddToCart={handleAddToCart}
                        />
                    </>
                ) : (
                    <PayScreen setOpenPayScreen={() => handleAddToCart("1")} />
                )}
            </main>
            {open && <ModalCarts onClose={() => setOpen(false)} />}
            {openItems && <ModalItems onClose={() => setOpenItems(false)} />}
        </div>
    );
}

export default Layout;
