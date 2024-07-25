import { useState, useEffect } from "react";

import { toast } from "react-toastify";

import "./styles.css";

import Header from "../header";
import Table from "../table";
import Form from "../form";
import PayScreen from "../payScreen";

import ModalCarts from "../modalCarts";
import ModalItems from "../modalItems";

import { initialCart } from "../../db";

function Layout() {
    const [screen, setScreen] = useState({
        isOpen: false,
        itemId: {},
    });

    const [open, setOpen] = useState(false);
    const [openItems, setOpenItems] = useState(false);
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : initialCart;
    });

    const handleAddToCart = (newItem) => {
        setCart((prevCart) => [...prevCart, newItem]);
        toast.success("Item adicionado ao carrirro");
    };

    const handleDeleteFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
        toast.success("Item deletado com sucesso");
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const closePayScreen = () => {
        setScreen({ isOpen: false, itemId: [] });
        setCart([]);
    };

    return (
        <div className="layout">
            <Header screnPay={screen.isOpen} setScreen={() => setScreen(false, [])} />
            <main>
                {!screen.isOpen ? (
                    <>
                        <Table
                            cart={cart}
                            handleDeleteFromCart={handleDeleteFromCart}
                            setOpenPayScreen={({ isOpen, itemId }) => {
                                setScreen({ isOpen, itemId });
                            }}
                        />
                        <Form
                            isOpenModalCarts={() => setOpen(true)}
                            isOpenModalItens={() => setOpenItems(true)}
                            handleAddToCart={handleAddToCart}
                        />
                    </>
                ) : (
                    <PayScreen payCart={screen.itemId} closePayScreen={closePayScreen} />
                )}
            </main>
            {open && <ModalCarts onClose={() => setOpen(false)} />}
            {openItems && <ModalItems onClose={() => setOpenItems(false)} />}
        </div>
    );
}

export default Layout;
