import { useState } from "react";

import "./styles.css";

import Header from "../header";
import Table from "../table";
import Form from "../form";
//import ModalCarts from "../modalCarts";
import ModalItems from "../modalItems"

function Layout() {
    const [open, setOpen] = useState(false);

    return (
        <div className="layout">
            <Header />
            <main>
                <Table />
                <Form isOpenModalCarts={() => setOpen(true)} />
            </main>

            {open && <ModalItems onClose={() => setOpen(false)} />}

        </div>
    );
}

export default Layout;

// {open && <ModalCarts onClose={() => setOpen(false)} />}
