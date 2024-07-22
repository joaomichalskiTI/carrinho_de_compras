import { useState } from "react";

import "./styles.css";

import Header from "../header";
import Table from "../table";
import Form from "../form";

import ModalCarts from "../modalCarts";
import ModalItems from "../modalItems";

import { initialCart } from "../../db";

function Layout() {
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
            <Header />
            <main>
                <Table cart={cart} handleDeleteFromCart={handleDeleteFromCart} />
                <Form
                    isOpenModalCarts={() => setOpen(true)}
                    isOpenModalItens={() => setOpenItems(true)}
                    handleAddToCart={handleAddToCart}
                />
            </main>
            {open && <ModalCarts onClose={() => setOpen(false)} />}
            {openItems && <ModalItems onClose={() => setOpenItems(false)} />}
        </div>
    );
}

export default Layout;
